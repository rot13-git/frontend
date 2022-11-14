import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profilo',component:ProfiloComponent},
  {path:'post',component:PostComponent},
  {path:'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
