import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post.service";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-show-post",
  templateUrl: "./show-post.component.html",
  styleUrls: ["./show-post.component.scss"],
})
export class ShowPostComponent implements OnInit {
  post: Post | undefined;
  id: number = 0;
  user: User = new User();

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // get id from url
    this.id = parseInt(window.location.pathname.split("/")[2]);
    if (!this.id || this.postService.getPostById(this.id) === undefined) {
      window.location.href = "/404";
      return;
    }

    this.post = this.postService.getPostById(this.id);

    if (!this.post) {
      // redirect to 404
      window.location.href = "/404";
      return;
    }

    if (this.post.userId) {
      this.user = this.userService.getUserById(this.post.userId);
    }
  }

  getPostDate() {
    if (!this.post || !this.post.createdAt) {
      return;
    }
    let date = this.post.createdAt;
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  navigateBack() {
    window.history.back();
    // window.location.href = "/";
  }
}
