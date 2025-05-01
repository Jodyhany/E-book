import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { FeaturedBooksComponent } from "../featured-books/featured-books.component";
import { LatestArticlesComponent } from "../latest-articles/latest-articles.component";
import { SharedRoutingModule } from '../../../shared/shared-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HeroComponent } from "../hero/hero.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CategoriesComponent, FeaturedBooksComponent, LatestArticlesComponent, SharedModule, HeroComponent]
})
export class HomeComponent {

}
