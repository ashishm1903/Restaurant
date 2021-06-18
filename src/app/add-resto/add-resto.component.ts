import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert: boolean = false;
  
  addresto = new FormGroup({
    name: new FormControl('',Validators.required),
    Address: new FormControl('',Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  
  
  collectresto() {
    
    console.warn(this.addresto.value)
    if(this.name.value ==="" || this.Address.value==="" || this.Email.value==="")
    {
      console.warn("empty")
      alert("Please fill correct data....!!!!!!!!!")
    }
    else
    {
    this.resto.savedata(this.addresto.value).subscribe((result) => {
      this.alert = true;

      this.addresto.reset({});
    })
  }
  

  }
  
  get name() { return this.addresto.get('name') };
  get Address() { return this.addresto.get('Address') };
  get Email() { return this.addresto.get('Email') };
  clearAlert() {
    this.alert = false;

  }
  

}
