import { PostDto } from "./dto/post-dto";

export class Post {
  id?: string;
  title: string = "";
  url: string = "";
  text: string = "";
  createdAt?: Date;
  userId?: string;

  static fromJson(json: any): Post {
    const post = new Post();
    post.id = json.Id;
    post.title = json.Title;
    post.url = json.Url;
    post.text = json.Text;
    post.createdAt = json.CreatedAt;
    post.userId = json.UserId;
    return post;
  }

  static fromPostDto(postDto: PostDto): Post {
    let post = new Post();
    post.id = postDto.id;
    let content = Post.parseContent(postDto.content);
    post.title = content.title;
    post.url = content.url;
    post.text = content.text;
    post.userId = postDto.createdBy;
    return post;
  }

  static parseContent(content: string): any {
    let contentJson = JSON.parse(content);
    let contentObject = {
      title: contentJson.title,
      url: contentJson.url,
      text: contentJson.text,
    };
    return contentObject;
  }
}
