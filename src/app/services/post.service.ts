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
    return posts.find((post) => post.id === id);
  }
}
