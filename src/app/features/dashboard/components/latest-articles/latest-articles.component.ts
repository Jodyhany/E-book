import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-latest-articles',
  imports: [SharedModule],
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.scss'
})
export class LatestArticlesComponent {

}
