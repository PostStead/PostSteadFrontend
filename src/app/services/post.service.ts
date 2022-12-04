import { Injectable } from "@angular/core";
import { Post } from "../models/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  posts: Post[] = [
    {
      id: 1,
      title: "A post to remember",
      text: "This is a post to remember",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/002/366/096/23e.png",
      createdAt: new Date(),
      userId: 1,
    },
    {
      id: 2,
      title: "A post to remember 2",
      text: "This is a post to remember 2",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/002/366/098/a74.jpg",
      createdAt: new Date(),
      userId: 2,
    },
  ];

  constructor() {}

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  deletePostById(id: number) {
    let index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
