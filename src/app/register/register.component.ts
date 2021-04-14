import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { User } from '../User';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../Confirmed.Validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // topics=["facebook ","twitter " ,"google)"]
  // userModel=new User('','',"","","");
  // registerationForm=new FormGroup({
  //   userName:new FormControl(' ' ),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //     })
  //   });
  registerForm: FormGroup;
  submitted = false;
 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['',[Validators.required, Validators.minLength(5)]],
          lastName: ['', [Validators.required,Validators.minLength(5)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
         
      },{ 
        validator: ConfirmedValidator('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.registerForm.controls; 
  }

  
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
     
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}



