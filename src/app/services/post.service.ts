import { Injectable } from "@angular/core";
import { Post } from "../models/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor() {}

  getPosts() {
    let posts: Post[] = [
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
        userId: 1,
      },
    ];
    return posts;
  }

  getPostById(id: number) {
    let posts: Post[] = [
      {
        id: 1,
        title: "A post to remember",
        text: "This is a post to remember",
        url: "https://images.unsplash.com/photo-1610390000000-1b9b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date(),
        userId: 1,
      },
      {
        id: 2,
        title: "A post to remember 2",
        text: "This is a post to remember 2",
        url: "https://images.unsplash.com/photo-1610390000000-1b9b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date(),
        userId: 1,
      },
    ];
    return posts.find((post) => post.id === id);
  }
}
