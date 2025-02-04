import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { Component1Component } from './components/component-1/component-1.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';



@NgModule({
  declarations: [MainPageComponent, Component1Component, ParentComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class Module1Module { }
