import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../Userame.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  productform: FormGroup;
  constructor(private fb:FormBuilder) { }
  flag=false;
  products=["product1","product2","product3"];
  ngOnInit(): void {
    this.productform=this.fb.group({
      UserName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
      check:[''],
  comments:this.fb.array([]),
        });
  }
 
      get f()
      {
       return this.productform.controls;
      }
      get check()
      {
        return this.productform.get('check');
      }
    get comments()
    {
        return this.productform.get('comments') as FormArray
    }
    
      
      Add()
      {
       this.comments.push(this.fb.control('')); 
      }
      giveDiscount(state:any){
        if(state.currentTarget.checked)
        this.flag=false;
        else{
          this.flag==true;
        }
        

}}
