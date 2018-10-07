import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    Page1RoutingModule,
    ShareModule
  ],
  declarations: [Page1Component, CartComponent, DetailComponent],
  exports: []
})
export class Page1Module { }
