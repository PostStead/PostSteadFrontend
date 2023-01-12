import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  ViewChildren,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Post } from "src/app/models/post";
import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";
import { S3ServiceService } from "src/app/services/s3-service.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  @Input()
  post: Post = new Post();

  @Input()
  isOpened: Observable<boolean> = new EventEmitter<boolean>();

  loading: boolean = false;

  internalFileName: string = "";

  private isOpenedSubscription: Subscription;

  blob: Blob | undefined;

  imageAsBase64: string | undefined;
  fileName: string | undefined;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private s3Service: S3ServiceService
  ) {
    this.isOpenedSubscription = this.isOpened.subscribe((isOpened) => {
      this.clearImage();
    });
  }

  ngOnInit(): void {
    this.post = new Post();
    this.isOpenedSubscription = this.isOpened.subscribe((isOpened) => {
      this.clearImage();
    });
  }

  addPost() {
    this.post.url = this.s3Service.getSignedUrl(this.internalFileName);
    console.log(this.internalFileName);

    this.postService.createPost(this.post).subscribe((result) => {
      console.log(result);
      window.location.href = "/";
    });
  }

  public async onFileChanged(event: any) {
    this.loading = true;
    const file = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.blob = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageAsBase64 = reader.result as string;
      };
      // generate random guid
      let fileId =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      await this.s3Service.uploadFile(file, fileId);
      this.internalFileName = fileId;

      this.loading = false;
    }
  }

  async clearImage() {
    this.imageAsBase64 = undefined;
    this.blob = undefined;
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.value = "";
    this.fileName = undefined;
  }
}
