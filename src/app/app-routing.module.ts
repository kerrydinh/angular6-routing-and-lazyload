import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const MainRoutes: Routes = [
  { path: 'page1', loadChildren: './page1/page1.module#Page1Module' }, // APPLY LAZY LOAD
  //{ path: 'page2', loadChildren: './page2/page2.module#Page2Module'  }, NOT APPLY LAZYLOAD
  { path: '', redirectTo:  '', pathMatch: 'full'},
  { path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(MainRoutes),
    CommonModule
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
