import { Component, OnInit } from '@angular/core';
import {PostService } from 'src/app/Services/post.service';
import { IPost } from 'src/app/FirstFolder/IPost';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList:IPost[]=[];

  constructor(private postServices:PostService) { }
  errorMsg:string
  ngOnInit(): void {
    this.postServices.returnAllPosts().subscribe(
      employeeData=>
      {
        this.postList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }


}
