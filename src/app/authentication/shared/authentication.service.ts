import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl:string = 'token'

  constructor(private http: HttpClient) { }

  
  login(login:any) {
    return this.http.post(environment.restApiUrl + this.apiUrl, 
      "grant_type=password&username="+ login.username +"&password="+ login.password+"" 
      );
  }

}
