import { Component, OnInit } from '@angular/core';
import{RestoService} from '../resto.service'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
alert:boolean=false;
  constructor(private rest:RestoService) { }
Userlist:any=[];
  ngOnInit(): void {
    this.rest.getUserList().subscribe((result)=>{
      this.Userlist=result;
      console.warn(result)
    })
  }
  dltuser(item)
  {
    this.rest.deleteuser(item).subscribe((result)=>{
      this.Userlist.splice(item - 1, 1)
      this.alert=true;
    })
  }
  clearAlert()
  {
    this.alert=false;
  }

}
