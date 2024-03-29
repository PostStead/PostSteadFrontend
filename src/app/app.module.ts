import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { PostModalComponent } from "./components/post-modal/post-modal.component";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PostComponent } from "./components/post/post.component";
import { ShowPostComponent } from "./components/show-post/show-post.component";
import { ErrorComponent } from "./components/error/error.component";
import { AboutComponent } from "./components/about/about.component";
import { PostsComponent } from "./components/posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AddPostComponent,
    PostModalComponent,
    EditPostComponent,
    DashboardComponent,
    PostComponent,
    ShowPostComponent,
    ErrorComponent,
    AboutComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
