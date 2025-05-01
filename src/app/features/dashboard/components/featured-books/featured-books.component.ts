import { Component,  OnInit } from '@angular/core';
import { BooksDataService } from '../../services/books-data.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-featured-books',
  imports: [SharedModule],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.scss',

})
export class FeaturedBooksComponent implements OnInit {
  constructor(private _booksData:BooksDataService){}
  featuredBooks:any[]=[]
  GetfeaturedBooks(){
    this._booksData.GetFeaturedbook().subscribe({
      next:(res)=>{
        this.featuredBooks=res.data
        console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }
  AddtoCard(obj:any){
    this._booksData.AddCart(obj).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }
  ngOnInit(): void {
    this.GetfeaturedBooks()
  }

}

// عايز ارمي الرد في {}
// (payload:{
  // book:string,
  // quantity:number