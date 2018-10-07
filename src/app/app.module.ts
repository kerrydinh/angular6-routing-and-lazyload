import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Module } from './page2/page2.module';
import { CountService } from './services/count.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Page2Module,
    AppRoutingModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
