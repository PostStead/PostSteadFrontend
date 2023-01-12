import { Post } from "../post";

export class PostDto {
    id?: string;
    content: string = "";
    createdBy?: string;

    static fromPost(post: Post): PostDto {
        let postDto = new PostDto();
        postDto.id = post.id;
        postDto.content = {
            title: post.title,
            url: post.url,
            text: post.text,
        }.toString();
        postDto.createdBy = post.createdBy;
        return postDto;
    }
}