import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RestoService } from '../resto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  resiresto = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  register() 
  {
    console.warn(this.resiresto.value)
    if (this.name.value === "" || this.email.value === "") {
      alert("Please fill up complete data.....!")
    }
    else {
      this.resto.registerUser(this.resiresto.value).subscribe((result) => {
        console.warn(result)
        this.alert = true;
        this.resiresto.reset({});
      })
    }
  }
  get name() { return this.resiresto.get('name') }
  get email() { return this.resiresto.get('email') }
  clearAlert() {
    this.alert = false;
  }

}
