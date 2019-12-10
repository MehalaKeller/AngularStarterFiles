import { Component } from '@angular/core';
import { IProduct } from './welcome';
//import { runInThisContext } from 'vm';
import { ProductService } from './welcome.service';

@Component({
  selector: 'pm-products',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  products: IProduct[] = [];
  filteredProducts: IProduct[];
  constructor(private productService: ProductService)
      {
        console.log("in constructor")
      }
  ngOnInit() : void {
    console.log("in init");
    //this.products = productService.getProducts();
    this.productService.getProducts().subscribe(prodObserved => {
      this.products = prodObserved;
      this.filteredProducts = this.products;
    })
  }
}