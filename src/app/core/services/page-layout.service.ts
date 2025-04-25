import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageLayout } from '../enums/page-layout';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
// subject 
public  layoutsubject = new Subject<PageLayout>();
layouts$=this.layoutsubject.asObservable()
setLayout(value:PageLayout){
  this.layoutsubject.next(value)
}
constructor() { }
}
