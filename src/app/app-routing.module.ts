import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsPagesComponent } from './components/pages/products-pages/products-pages.component';
import { ProductsComponent } from './components/admin/products/products.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products-page", component: ProductsPagesComponent },
  { path: "products", component: ProductsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
