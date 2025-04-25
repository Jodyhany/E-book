import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutService } from './core/services/page-layout.service';
import { CommonModule } from '@angular/common';
import { PageLayout } from './core/enums/page-layout';
import { AuthLayoutComponent } from "./features/auth/components/auth-layout/auth-layout.component";
import { MasterLayoutComponent } from "./features/dashboard/components/master-layout/master-layout.component";
import { NotFoundComponent } from "./features/shared/components/not-found/not-found.component";
import { NavbarComponent } from "./features/shared/components/navbar/navbar.component";
import { FooterComponent } from "./features/shared/components/footer/footer.component";
import { HeaderComponent } from "./features/shared/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AuthLayoutComponent, MasterLayoutComponent, NotFoundComponent, NavbarComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onlinebookstore';
  readonly pageLayout=PageLayout
  constructor(public _PageLayoutService:PageLayoutService){}
}
