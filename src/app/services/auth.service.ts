import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURI = 'http://localhost:5500/api/v1'

  constructor(private http: HttpClient) { }

  createUser(data:any): Observable<any>{
    return this.http.post(this.baseURI + '/auth/sign-up', data);
  }
}
