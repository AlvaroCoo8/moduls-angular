import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module1Module } from './module-1/module-1.module';
import { Module2Module } from './module-2/module-2.module';
import { Module3Module } from './module-3/module-3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Module1Module,
    Module2Module,
    Module3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
