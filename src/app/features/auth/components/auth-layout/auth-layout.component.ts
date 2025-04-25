import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import { LogoComponent } from "../../../shared/components/logo/logo.component";

@Component({
  selector: 'app-auth-layout',
  imports: [MatGridListModule, LogoComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent  {
  
  }

