import { DropdownComponent } from './dropdown/dropdown';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { ButtonComponent } from './button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DateFormatterPipe, DefaultImamgePipe, TokenFormatterPipe, WhiteSpaceFillerPipe } from './pipes';
import { ChipsComponent } from './chips';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './modal';

const uiElements = [
  DefaultImamgePipe,
  DateFormatterPipe,
  TokenFormatterPipe,
  WhiteSpaceFillerPipe,
  ModalComponent,
  ButtonComponent,
  ChipsComponent,
  DropdownComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRippleModule,
    MatChipsModule,
    MatButtonModule
  ],
  declarations: uiElements,
  exports: uiElements
})
export class SharedModule { }
