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

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((result) => {
      for (let post of result.data) {
        this.posts.push(post);
      }
    });
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  toggleIsOpened() {
    this.isOpened.emit(true);
  }
}
