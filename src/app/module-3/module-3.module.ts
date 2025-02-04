import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { Component1Component } from './components/component-1/component-1.component';



@NgModule({
  declarations: [MainPageComponent, Component1Component],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class Module3Module { }
