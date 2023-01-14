import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class S3ServiceService {
  private bucket: S3Client;

  constructor(private http: HttpClient) {
    this.bucket = new S3Client({
      credentials: {
        accessKeyId: environment.AWS_ACCESS_KEY_ID,
        secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
      },
      region: environment.AWS_REGION,
    });
  }

  async uploadFile(file: File, fileId: string) {
    const params = {
      Bucket: "poststead-bucket",
      Key: fileId,
      Body: file,
      ContentType: file.type,
    };

    try {
      const response = await this.bucket.send(new PutObjectCommand(params));
    } catch (error) {
      console.log("FAILURE", error);
    }
  }

  async getUrlByFileName(fileId: string) {
    const params = {
      Bucket: "poststead-bucket",
      Key: fileId,
    };

    try {
      const response = await this.bucket.send(new GetObjectCommand(params));
      return response;
    } catch (error) {
      console.log("FAILURE", error);
      return null;
    }
  }

  getSignedUrl(fileId: string): string {
    return `https://poststead-bucket.s3.amazonaws.com/${fileId}`;
  }
}
