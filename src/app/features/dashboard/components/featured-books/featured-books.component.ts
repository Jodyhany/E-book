import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../../services/books-data.service';

@Component({
  selector: 'app-featured-books',
  imports: [],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.scss'
})
export class FeaturedBooksComponent implements OnInit {
  constructor(private _booksData:BooksDataService){}
  featuredBooks:any[]=[]
  GetfeaturedBooks(){
    this._booksData.GetFeaturedbook().subscribe({
      next:(res)=>{
        this.featuredBooks=res
        console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }
  ngOnInit(): void {
    this.GetfeaturedBooks()
  }

}