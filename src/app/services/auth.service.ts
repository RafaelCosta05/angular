import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../config/api-routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginObj: { email: string; password: string }): Observable<any> {
    return this.http.post(ApiRoutes.login, loginObj, { withCredentials: true });
  }

  register(registerObj: { email: string; password: string }): Observable<any> {
    return this.http.post(ApiRoutes.register, registerObj);
  }
}
