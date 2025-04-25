import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { FeaturedBooksComponent } from "../featured-books/featured-books.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CategoriesComponent, FeaturedBooksComponent]
})
export class HomeComponent {

}
