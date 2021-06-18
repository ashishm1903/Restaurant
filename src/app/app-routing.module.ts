import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddRestoComponent} from './add-resto/add-resto.component';
import { FooterComponent } from './footer/footer.component';
import{ListRestoComponent} from "./list-resto/list-resto.component";
import{LoginComponent} from './login/login.component';
import{RegisterComponent} from './register/register.component';
import{UpdateRestoComponent} from './update-resto/update-resto.component'
import{ListUserComponent} from './list-user/list-user.component'
import{AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {
    path:"Add",canActivate:[AuthGuard], component:AddRestoComponent
  },
  {
    path:"Update/:id",canActivate:[AuthGuard], component:UpdateRestoComponent
  },
  {
    path:"List", canActivate:[AuthGuard],component:ListRestoComponent
  },
  
  {
    path:"Register", canActivate:[AuthGuard],component:RegisterComponent
  },
  {
    path:"UserList", canActivate:[AuthGuard],component:ListUserComponent
  },
  {
    path:"Footer",canActivate:[AuthGuard], component:FooterComponent
  },
  {
    path:"", component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
