import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsPagesComponent } from './components/pages/products-pages/products-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxPipe,
    ChangeNumberToTextPipe,
    ProductEditComponent,
    NotFoundComponent,
    HomeComponent,
    ProductsPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
