import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogPassService } from '../../services/user-log-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [SharedModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
UpdatePassForm=new FormGroup({
  password:new FormControl(null,[Validators.required]),
  password_new:new FormControl(null,[Validators.required]),
})
constructor(private _userServices:UserLogPassService,private _router:Router){}
UpdatePass(data:FormGroup){

  this._userServices.UpdatePass(data.value).subscribe({
    next:(res)=>{
      this._router.navigate(['auth/login'])
    },
    error:(err)=>{}
  })
}
}
