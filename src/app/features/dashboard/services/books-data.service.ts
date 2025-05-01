import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  constructor(private _Http:HttpClient){}
  GetCategories():Observable<any>{
    return this._Http.get('api/category')
  }
  GetFeaturedbook():Observable<any>{
    return this._Http.get('api/book')
  }
  AddCart(payload:{
    book:string,
    quantity:number
  }):Observable<any>{
    return this._Http.post(`api/basket/item`,payload)
  }
}
