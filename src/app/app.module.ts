import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { ProductsListComponent } from './areas/p-products/components/products-list/products-list.component';
import { ProductComponent } from './areas/p-products/components/product/product.component';
import {PProductsModule} from "./areas/p-products/p-products.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
