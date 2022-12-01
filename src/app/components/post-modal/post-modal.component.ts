import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post-modal",
  templateUrl: "./post-modal.component.html",
  styleUrls: ["./post-modal.component.scss"],
})
export class PostModalComponent implements OnInit {
  @Input()
  post: Post = new Post();

  constructor() {}

  ngOnInit(): void {}
}
