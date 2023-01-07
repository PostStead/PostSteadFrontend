import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private postService: PostService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn === false) {
        window.location.href = "/login";
      }
    });

    this.posts = this.getPosts();
  }

  getPosts() {
    return this.postService.getPosts().filter(post => post.userId === this.authService.getCurrentUser().id);
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
    
    this.postService.deletePostById(id);
    this.posts = this.getPosts();
  }

}
