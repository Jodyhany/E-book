import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-master-layout',
  imports: [HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {

}
