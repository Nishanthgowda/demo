import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  formdata:Review = new Review();
  constructor(private http:HttpClient) { }

  readonly url="http://localhost:5298/api";

  postreview(rev:Review)
  {
    return this.http.post(this.url+"/PizzaReviews",rev);
  }

  getreview():Observable<Review[]>
  {
    return this.http.get<Review[]>(this.url+"/PizzaReviews");
  }

}
