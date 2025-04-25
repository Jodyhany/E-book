import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogPassService } from '../../services/user-log-pass.service';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [SharedModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
resetPass=new FormGroup(
  {email:new FormControl(null,[Validators.required]),
    otp:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  }
) 
constructor(private _userserces:UserLogPassService,private _routee:Router){}
sendOtp(data:FormGroup){
  this._userserces.SendOTp(data.value).subscribe({
    next:(res)=>{
      console.log(res)
      this._routee.navigate(['/auth/login'])
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
