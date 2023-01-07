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
}
