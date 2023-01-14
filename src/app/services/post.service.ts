import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostDto } from "../models/dto/post-dto";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  apiUrl = "http://localhost:8080/api";
  // apiUrl = "https://poststead.online/api";

  httpOptions = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${btoa(
        this.authService.getCurrentUserUsername() +
          ":" +
          this.authService.getCurrentUserPassword()
      )}`,
    },
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPosts() {
    return this.http.get<any>(`${this.apiUrl}/posts/getAll`);
  }

  getPostsByUser(username: string) {
    return this.http.get<any>(
      `${this.apiUrl}/posts/${username}`,
      this.httpOptions
    );
  }

  getPostById(id: string) {
    if (!this.authService.getCurrentUser()) {
      window.location.href = "/login";
      return;
    }

    return this.http.get<Post>(
      `${this.apiUrl}/posts/post/${id}`,
      this.httpOptions
    );
  }

  createPost(post: Post): Observable<Post> {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Basic ${btoa(
          this.authService.getCurrentUserUsername() +
            ":" +
            this.authService.getCurrentUserPassword()
        )}`,
      },
    };

    return this.http.post<Post>(
      `${this.apiUrl}/posts/${this.authService.getCurrentUserUsername()}`,
      {
        title: post.title,
        text: post.text,
        url: post.url,
        createdBy: this.authService.getCurrentUserUsername(),
      },
      httpOptions
    );
  }

  deletePostById(id: string) {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Basic ${btoa(
          this.authService.getCurrentUserUsername() +
            ":" +
            this.authService.getCurrentUserPassword()
        )}`,
      },
    };

    return this.http.delete(
      `${
        this.apiUrl
      }/posts/delete/${this.authService.getCurrentUserUsername()}/${id}`,
      httpOptions
    );
  }
}
