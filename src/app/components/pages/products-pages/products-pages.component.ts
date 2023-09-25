import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-page',
  templateUrl: './products-pages.component.html',
  styleUrls: ['./products-pages.component.css']
})
export class ProductsPagesComponent {
  searchText: string = "";
  products: IProduct[] = [];
  constructor(private ProductService: ProductService) {

    this.ProductService.getAll().subscribe({
      next: (data) => { this.products = data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }
}
