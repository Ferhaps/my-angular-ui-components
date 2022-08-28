import { Component, ElementRef, Input } from '@angular/core';
import { fader } from './animations';

@Component({
  selector: 'chips',
  template: `
  <mat-chip-list>
    <mat-chip *ngFor="let chip of chips; trackBy: trackById" @fadeInOut [selectable]="false" class="chip">
      {{chip.name}}
      <img src="../../../assets/icons/closeXChip.svg" alt="X" (click)="removeFilter(chip)">
    </mat-chip>
  </mat-chip-list>
  `, 
  styles: [`
    .chip {
      background-color: white;
      border: 1px solid #707070;
    }
    img {
      margin-left: 7px;
      margin-right: -1px;
    }
  `],
  animations: [ fader ]
})

export class ChipsComponent {
  @Input() chips: any = [];

  hoverIndex!: number;

  constructor(private el: ElementRef) {}

  removeFilter(chip: any): void {

  }

  trackById(index: number, chip: any): number {
    return chip.id;
  }
}