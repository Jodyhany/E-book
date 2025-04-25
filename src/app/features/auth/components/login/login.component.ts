import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogPassService } from '../../services/user-log-pass.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ MatSlideToggleModule,SharedModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ShowPass:boolean=false
  constructor(private _Userser:UserLogPassService,private _route:Router){}
loginform=new FormGroup(
  {email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,])},
) 
LogInUser(data:FormGroup){
this._Userser.LogInApi(data.value).subscribe({
  next:(res)=>{this._route.navigate(['dashboard'])
    console.log(res.data.accessToken)
    localStorage.setItem('token',res.data.accessToken)
  },
  error:(err)=>console.log(err),
  
})
}
}