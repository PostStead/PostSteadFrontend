import { Component, Input, OnInit, ViewChildren } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  @Input()
  post: Post = new Post();

  blob: Blob | undefined;

  imageAsBase64: string | undefined;
  fileName: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.post = new Post();
  }

  addPost() {
    console.log(this.post);
  }

  public onFileChanged(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.blob = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageAsBase64 = reader.result as string;
      };
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
