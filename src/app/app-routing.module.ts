import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { DiscountComponent} from './discount/discount.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'registerpage', component:RegisterComponent},
  {path: 'loginpage', component:LoginComponent},
  {path: 'Notespage', component:NotesComponent},
   {path:'products',component:ProductsComponent,
    children:
    [
      {path:'withDiscount',component:DiscountComponent},
      {path:'withOutDiscount',component:NoDiscountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
