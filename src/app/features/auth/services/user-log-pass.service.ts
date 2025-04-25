import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLogPassService {

  constructor(private _http:HttpClient) { }
  LogInApi(data:FormGroup):Observable<any>{
    return this._http.post('api/auth/login',data)
  }
  SendMail(data:FormGroup):Observable<any>{
    return this._http.post('api/auth/forgot-password',data)
  }
  RegisterApi(data:FormGroup):Observable<any>{
    return this._http.post('api/auth/register',data)
  }
  SendOTp(data:FormGroup):Observable<any>{
    return this._http.post('api/auth/reset-password',data)
  }
  UpdatePass(data:FormGroup):Observable<any>{
    return this._http.post('api/auth/change-password',data)
  }
}
// 