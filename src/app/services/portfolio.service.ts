import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  private data  = new Subject<{}>()
  public dataShared = this.data.asObservable();
  updatePortfoioData( userData ) {
    this.data.next(userData)
  }

  post(file, formdata){
    const form = new FormData()
    form.append('image', file)
    form.append("postData", JSON.stringify(formdata))
    
    this.http.post("http://localhost:3000/post/create", form).subscribe(res=>{
      console.log(res);
      
    })
  }



}
