import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,title:'login'},
  {path:'register',component:RegisterComponent,title:'register'},
  {path:'resetpassword',component:ResetPasswordComponent,title:'resetPassword'},
  {path:'changePassword',component:ChangePasswordComponent,title:'changePassword'},
  {path:'forgetPassword',component:ForgetPasswordComponent,title:'forgetPasswprd'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
