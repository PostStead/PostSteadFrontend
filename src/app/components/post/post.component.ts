import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input()
  post: Post = new Post();

  user: User = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let foundUser;
    if (this.post.createdBy) {
      foundUser = this.userService.getUserById(this.post.createdBy);
    }
    if (foundUser) {
      this.user = foundUser;
    }
  }

  getPostDate() {
    if (!this.post.createdAt) {
      return;
    }
    let date = this.post.createdAt;
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }
}
