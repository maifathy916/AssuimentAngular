import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Command } from 'protractor';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    StructuralDirectivesComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    DiscountComponent,
    NoDiscountComponent,
    LoginComponent,
    RegisterComponent,
    NotesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
