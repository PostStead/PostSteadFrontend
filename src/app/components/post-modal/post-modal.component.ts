import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post-modal",
  templateUrl: "./post-modal.component.html",
  styleUrls: ["./post-modal.component.scss"],
})
export class PostModalComponent implements OnInit {
  @Input()
  post: Post = new Post();

  @Input()
  isOpened: Observable<boolean> = new EventEmitter<boolean>();

  private isOpenedSubscription: Subscription;

  constructor() {
    this.isOpenedSubscription = this.isOpened.subscribe((isOpened) => {
      this.toggleIsOpened();
    });
  }

  ngOnInit(): void {
    this.isOpenedSubscription = this.isOpened.subscribe((isOpened) => {
      this.toggleIsOpened();
    });
  }

  toggleIsOpened() {
    this.post = new Post();
  }
}
