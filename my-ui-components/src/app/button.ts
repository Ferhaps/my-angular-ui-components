import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-btn',
  template: `
    <button matRipple class={{class}}><ng-content></ng-content></button>`,
  styles: [`
    button {
      margin-top: 1em;
      cursor: pointer;
      border: none;
      border-radius: 24px;
      background-color: #31ADFF;
      color: white;
      padding: 5px 40px;
      font: normal normal normal 20px/27px 'SF Pro Display Medium';
      box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
    }
    button:hover {
      background-color: #4db8ff;
    }
  `]
})

export class ButtonComponent {
  @Input() class: string = '';
}