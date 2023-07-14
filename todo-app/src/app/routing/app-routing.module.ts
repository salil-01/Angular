import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from '../components/addtodo/addtodo.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { TodoComponent } from '../pages/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'todo/:add',
    component: AddtodoComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
