import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsComponent } from './chips';
import { ModalComponent } from './modal';
import { MatRippleModule } from '@angular/material/core';
import { ButtonComponent } from './button';

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
