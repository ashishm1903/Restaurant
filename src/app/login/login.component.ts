import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from "@angular/router";
import{FormBuilder} from '@angular/forms';
import{RestoService} from '../resto.service';

declare let alertify:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myform:FormGroup;
disable:boolean=false;
  constructor(private rout:Router,private _formBuilder: FormBuilder,private rest:RestoService) { }

  ngOnInit(): void {
    this.myform = this._formBuilder.group({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
     })
     
     
     this.rest.getUserForLogin().subscribe((result)=>{
      console.warn(result)
     
      
    })
  }
  onSubmit(){
    
    let username = this.myform.get('username').value;
    let password = this.myform.get('password').value;
    
    
   
   //this.rest.getUserList().subscribe((result)=>{
    //this.Userlist=result;
    
    if (username === 'ashish' && password === '1234')
    {
      this.rout.navigate(['/Footer']);
      console.warn(this.disable)
      this.disable=true;
    } 
    else{
      this.rout.navigate(['/Register']);
      this.disable=false;
    } 
  }
  login() {
    if ((this.myform.value.username == this.rest.configData.username) && (this.myform.value.password == this.rest.configData.password)) {
      sessionStorage.setItem('authenticate', 'true');
      sessionStorage.setItem('username', this.myform.value.username);
      alertify.alert('Login', 'Welcome' + ' ' + this.myform.value.username + ' ' + '....! You have successfully login...!!');
      this.rout.navigate(['/Footer']);
     
    }
    else {
      
      alertify.alert('Error!', 'Please enter correct credentils.....!!');
    }
  }
  
}
