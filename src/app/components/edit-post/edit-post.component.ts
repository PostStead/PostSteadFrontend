import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"],
})
export class EditPostComponent implements OnInit {
  @Input()
  post: Post = new Post();

  constructor() {}

  ngOnInit(): void {}
}
