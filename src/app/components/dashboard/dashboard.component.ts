import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  post: Post = new Post();
  isOpened: boolean = false;

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  toggleIsOpened() {
    this.isOpened = true;
  }
}
