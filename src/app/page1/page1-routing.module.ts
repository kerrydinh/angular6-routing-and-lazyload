import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';

const page1Routes: Routes = [
  {
    path: '', component: Page1Component,
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'detail', component: DetailComponent }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(page1Routes)
  ],
  exports: [ RouterModule]
})
export class Page1RoutingModule { }
