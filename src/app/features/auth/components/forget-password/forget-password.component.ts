import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { UserLogPassService } from '../../services/user-log-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [SharedModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  ForgetPass=new FormGroup({
    email: new FormControl(null,[Validators.required])
  })
constructor(private _Userser:UserLogPassService,private _route:Router,){}
  GetEmail(mail:FormGroup){
    this._Userser.SendMail(mail.value).subscribe({
      next:()=>{this._route.navigate(['/auth/resetpassword'])},
      error:(err)=> {},
    })
  }

}
