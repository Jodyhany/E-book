import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogPassService } from '../../services/user-log-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  {
Showpass:boolean=false
registerForm=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  first_name:new FormControl(null,[Validators.required]),
  last_name:new FormControl(null,[Validators.required]),
 password:new FormControl(null,[Validators.required]),
  role:new FormControl(null,[Validators.required]),
})
constructor(private _userser:UserLogPassService,private _router:Router){}
createUser(data:FormGroup){
  console.log(data.value)
    this._userser.RegisterApi(data.value).subscribe({
      next:(res)=>{
        this._router.navigate(['auth/login'])
      },
      // عايز اعمل فالدشن هنا
      error:(err)=>{console.log(err.error.message)}
    })
}
}
