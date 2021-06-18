import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http'
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NavbarComponent } from './navbar/navbar.component'
import{RestoService} from './resto.service'

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
HttpClientModule,
ReactiveFormsModule,
FormsModule

  ],
  providers: [RestoService,
    {
  provide :APP_INITIALIZER,
  useFactory:(restoservice:RestoService)=>
  () =>restoservice.loadConfigurationData(),
  deps:[RestoService],
  multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
