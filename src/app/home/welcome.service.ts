import { IProduct } from './welcome';

//import { IProduct2 } from './welcome';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient){}

  //productUrl = "api/products/products.json";
  productUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=aafd0e892f5583c8f91b5defc920189e&language=en-US&page=1";
  productUrl2 = "";
  getProducts() :Observable<IProduct[]>
    {
        return this.http.get<IProduct[]>(this.productUrl)
    }
//getProducts2() :Observable<IProduct2[]>{(this.productUrl2)}
  
}

