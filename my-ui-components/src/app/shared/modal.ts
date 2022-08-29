import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { popupFader } from "./animations";

@Component({
  selector: "modal",
  template: `
  <dialog #popup>
    <div *ngIf="title" class="centerer" [@popupFader]="popupState">
      <div class="popup-title">{{title}}</div>
      <div 
        class="close-x right" (click)="closePopup()">
        <img src="../../../assets/icons/closeX.svg" alt="X">
      </div>
    </div>
    <ng-content></ng-content>
  <dialog>`,
  styles: [`
    dialog {
    min-width: 290px;
    padding: 0;
    border: 1px solid #707070;
    border-radius: 15px;
    width: 22%;
    overflow: hidden;
    }
    .popup-title {
      text-align: center;
      font: normal normal 600 22px/26px 'SF Pro Display Semibold';
      width: 100%;
      padding: 15px;
      position: relative;
    }
    .close-x {
      cursor: pointer;
      position: absolute;
      left: 90%;
    }
    dialog::backdrop {
      backdrop-filter: brightness(60%);
    }
  `],
  animations: [ popupFader ]
})
export class ModalComponent {
  @Input() title!: string;

  @Output() close = new EventEmitter();

  @ViewChild('popup') popup!: ElementRef;

  popupState: string = 'closed';

  openPopup(): void {
    this.popup.nativeElement.showModal();
    this.popupState = 'opened';
  }

  closePopup(): void {
    this.popupState = 'closed';
    setTimeout(() => {
      this.popup.nativeElement.close();
      this.close.emit();
    }, 170);
  }
}