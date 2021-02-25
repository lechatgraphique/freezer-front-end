import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PProductsRoutingModule } from './p-products-routing.module';
import { ProductImageComponent } from './components/product-image/product-image.component';


@NgModule({
  declarations: [ProductImageComponent],
  imports: [
    CommonModule,
    PProductsRoutingModule
  ],
  exports: [
    ProductImageComponent
  ]
})
export class PProductsModule { }
