import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { HttpClient } from "@angular/common/http";
import { PostDto } from "../models/dto/post-dto";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  apiUrl = "http://localhost:8080/api";
  // apiUrl = "https://poststead.online/api";

  posts: Post[] = [
    {
      id: "1",
      title: "A post to remember",
      text: "This is a post to remember",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/002/366/096/23e.png",
      createdAt: new Date(),
      userId: "1",
    },
    {
      id: "2",
      title: "A post to remember 2",
      text: "This is a post to remember 2",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/002/366/098/a74.jpg",
      createdAt: new Date(),
      userId: "2",
    },
  ];

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPosts() {
    return this.http.get<any>(`${this.apiUrl}/posts/getAll`);
  }

  getPostById(id: string) {
    return this.http.get<PostDto>(`${this.apiUrl}/posts/post/${id}`);
  }

  createPost(post: Post): Observable<PostDto> {
    return this.http.post<PostDto>(`${this.apiUrl}/posts`, {
      post,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Basic ${btoa(this.authService.getCurrentUserUsername() + ":" + this.authService.getCurrentUserPassword())}`
      },
    });
  }

  deletePostById(id: string) {
    let index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
