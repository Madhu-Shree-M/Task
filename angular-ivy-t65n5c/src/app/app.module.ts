import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemDetailsComponent } from './components/cart-item-details/cart-item-details.component';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, CartListComponent, CartItemDetailsComponent, ProductDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
