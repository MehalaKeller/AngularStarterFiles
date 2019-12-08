import { IProduct } from './tvShow';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient){}

  //productUrl = "api/products/products.json";
  productUrl = "https://api.themoviedb.org/3/tv/popular?api_key=aafd0e892f5583c8f91b5defc920189e&language=en-US&page=1";
  getProducts() :Observable<IProduct[]>
    {
        console.log('hello');
        return this.http.get<IProduct[]>(this.productUrl)
    }
}