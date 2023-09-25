// import { Component } from '@angular/core';
// import { IProduct } from 'src/app/interfaces/product';

// @Component({
//   selector: 'app-management',
//   templateUrl: './management.component.html',
//   styleUrls: ['./management.component.css']
// })
// export class ManagementComponent {
//   searchText: string = "";
//   products: IProduct[] = [];
//   constructor(private productService: ProductService) {

//     this.productService.getAll().subscribe({
//       next: (data) => { this.products = data },
//       error: (error) => { console.log('error', error.message) },
//       complete: () => { console.log('complete') }
//     })
// }
// }
