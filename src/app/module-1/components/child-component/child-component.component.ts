import { Component, Input } from '@angular/core';

@Component({
  selector: 'module-1-components-child-component',
  standalone: false,
  
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input()
  public item:string = ''
}
