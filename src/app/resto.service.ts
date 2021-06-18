import { Injectable, IterableDiffers } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  configData:any=[];
  originUrl="http://localhost:4200/"
url="http://localhost:3000/Restaurant";
rooturl="http://localhost:3000/user"
  constructor(private http:HttpClient,private rout:Router) { }
  getList()
  {
    return this.http.get(this.url);
  }
  getUserList()
  {
    return this.http.get(this.rooturl);
  }
  savedata(data)
  {
   return this.http.post(this.url,data)
  }
  
  
  deleteresto(id)
  {
    console.warn(id)
    console.warn(this.url)
    return this.http.delete(this.url+ '/' +id)
  }
  deleteuser(id)
  {
    console.warn(id)
    console.warn(this.rooturl)
    return this.http.delete(this.rooturl+ '/' +id)
  }
  currentDataDelete(id)
  {
    return this.http.get(this.url+ '/' +id)
  }
  UpdateDataDelete(data:any,id)
  {
    console.warn()
    return this.http.put("http://localhost:3000/Restaurant"+ '/' +id,data)
    
  }
  registerUser(data)
  {
    return this.http.post(this.rooturl,data)
  }
  getUserForLogin()
  {
    return this.http.get(this.rooturl);
  }
  loadConfigurationData(): Promise<any> {
    return this.http.get<any>(`${this.originUrl}/assets/app.config.json`)
    .pipe(tap(result => {
      this.configData = result;
    }))
    .toPromise();
  }
  logout()
  {
    sessionStorage.clear()
    this.rout.navigate['/']

  }
}
