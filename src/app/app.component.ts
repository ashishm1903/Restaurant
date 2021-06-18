import { Component } from '@angular/core';
import{RestoService} from './resto.service'
declare let alertify:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  //disabled:boolean=true;
  constructor(private reso:RestoService){}
  logoutt()
  {
    this.reso.logout();
   
    
      alertify.alert('Thank you....!', 'You have successfully logout.....!!');
    
    
  }
}
