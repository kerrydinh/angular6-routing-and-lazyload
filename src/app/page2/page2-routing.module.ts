import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';

const page2Routes: Routes = [
  {
    path: 'page2', component: Page2Component,  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page2Routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
