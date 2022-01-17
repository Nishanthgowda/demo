import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/interfaces/login'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  formdata:ILogin=new ILogin();
  constructor(private http:HttpClient) { }

  readonly url="http://localhost:5298/api";

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }


    getbyemail(email:string):Observable<ILogin>
    {
        return this.http.get<ILogin>(this.url+"/Users/"+email);
    }

    postuser(user:ILogin)
    {
      return this.http.post(this.url+"/Users",user);
    }
}
