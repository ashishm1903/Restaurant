import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
import{RestoService} from '../resto.service'
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean=false;

  editresto=new FormGroup({
name:new FormControl(''),
Address:new FormControl(''),
Email:new FormControl('')
  })
  constructor(private rest:RestoService, private rout:ActivatedRoute) { }
disabled:boolean=false;
  ngOnInit(): void {
    //console.warn(this.rout.snapshot.params.id)
    this.rest.currentDataDelete(this.rout.snapshot.params.id).subscribe((result)=>{
      this.editresto=new FormGroup({
        name:new FormControl(result['name']),
        Address:new FormControl(result['Address']),
        Email:new FormControl(result['Email'])
    }
    )
    //console.warn(result)
  }
    )
    

}
UpdateData()
{
  //console.warn(this.editresto.value);
  this.rest.UpdateDataDelete(this.editresto.value,this.rout.snapshot.params.id).subscribe((result)=>{
    //console.warn(result)
    alert("Record Update Successfully...!")
    this.editresto.reset({});
  })
}
}

