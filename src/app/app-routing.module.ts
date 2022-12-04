import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ShowPostComponent } from "./components/show-post/show-post.component";
import { ErrorComponent } from "./components/error/error.component";
import { AboutComponent } from "./components/about/about.component";
import { PostsComponent } from "./components/posts/posts.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: DashboardComponent },
  { path: "post/:id", component: ShowPostComponent },
  { path: "about", component: AboutComponent },
  { path: "my-posts", component: PostsComponent },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
