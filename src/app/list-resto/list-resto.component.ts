import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
alert:boolean=false;
  constructor(private rest: RestoService) { }
  collection: any = [];
  ngOnInit(): void {
    this.rest.getList().subscribe((result) => {
      this.collection = result;
    }

    )

  }
  deleteresto(item) 
  {
  
    this.rest.deleteresto(item).subscribe((result) => {
      console.warn(result)
      this.collection.splice(item - 1, 1)
      this.alert=true;
    })
  }
  clearAlert()
  {
    this.alert=false;
    
  }

}
