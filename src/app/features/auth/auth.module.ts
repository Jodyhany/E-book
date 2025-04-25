import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { globalInterceptor } from '../../core/interseptor/global.interceptor';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
   providers: [
    provideHttpClient(withInterceptors([globalInterceptor]))
  ]
})
export class AuthModule { }
