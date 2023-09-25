import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
