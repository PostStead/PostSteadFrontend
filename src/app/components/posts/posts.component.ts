import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostDto } from "src/app/models/dto/post-dto";
import { Post } from "src/app/models/post";
import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn === false) {
        window.location.href = "/login";
      }
    });

    this.getPosts().subscribe((result) => {
      for (let post of result.data) {
        // this.posts.push(Post.fromPostDto(post));
        console.log(post);
        this.posts.push(post);
      }
    });
  }

  getPosts() {
    return this.postService.getPosts();
  }

  getPostDate(date: Date | undefined) {
    if (!date) {
      return;
    }
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  deletePost(id: string | undefined) {
    if (!id) {
      return;
    }

    this.postService.deletePostById(id).subscribe((result) => {
      console.log(result);
    });

    this.getPosts().subscribe((result) => {
      for (let post of result.data) {
        // this.posts.push(Post.fromPostDto(post));
        console.log(post);
        this.posts.push(post);
      }
    });
  }
}
