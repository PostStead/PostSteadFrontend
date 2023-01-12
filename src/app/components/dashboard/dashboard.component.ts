import { Component, EventEmitter, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  post: Post = new Post();
  isOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoggedIn: boolean = false;

  posts: Post[] = [];

  constructor(private postService: PostService, private authService: AuthService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(result => {
      console.log(result.data);
      for (let post of result.data) {
        this.posts.push(Post.fromPostDto(post));
        // console.log(post);
      }
    });
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  toggleIsOpened() {
    this.isOpened.emit(true);
  }
}
