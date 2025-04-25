import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { BooksDataService } from '../../services/books-data.service';

@Component({
  selector: 'app-categories',
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  constructor(private _booksData:BooksDataService){}
  AllCategories:any[]=[]
  ngOnInit(): void {
    this._booksData.GetCategories().subscribe({
      next:(res)=>{
        this.AllCategories=res
        },
      error:(err)=>console.log(err),
    })
  }
}
