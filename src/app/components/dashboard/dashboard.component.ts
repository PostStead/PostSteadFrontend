import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  post: Post = new Post();

  constructor() {}

  ngOnInit(): void {}
}
