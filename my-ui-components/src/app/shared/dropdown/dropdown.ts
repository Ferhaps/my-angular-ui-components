import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { openDropdown } from '../animations';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.html',
  styleUrls: [ 'dropdown.scss' ],
  animations: [ openDropdown ],
})
export class DropdownComponent {
  @Input() prop: string = '';
  @Input() title: string = '';
  @Input() data: any = [];

  @Output() rowClick = new EventEmitter();

  @ViewChild('list') list!: ElementRef<HTMLDivElement>

  filtersCount: number = 0;
  text: string = '';
  state: boolean = false;


  trackById(index: number, obj: any): number {
    return obj.id
  }

  onTyping() {
    let filterWord = this.text.toLowerCase();
    let newArr: any = [];
    for (const obj of this.data) {
      if (obj[this.prop].toLowerCase().startsWith(filterWord)) {
        newArr.unshift(obj);
      } else {
        newArr.push(obj);
      }
    }
    this.data = newArr;
  }

  onCloseClick(): void {
    if (this.text) {
      this.removeAllSelection();
    }
    this.text = '';
    this.onTyping();
  }

  onRowClick(event: any, obj: any, box: HTMLInputElement, row: HTMLDivElement, name: HTMLDivElement): void {
    if (event.target == box) {
      if (box.checked) {
        row.classList.add('selected-dropdown-item');
      } else {
        row.classList.remove('selected-dropdown-item');
      }
    } else if (event.target == row || event.target == name) {
      if (box.checked) {
        box.checked = false;
        row.classList.remove('selected-dropdown-item');
      } else {
        box.checked = true;
        row.classList.add('selected-dropdown-item');
      }
    }
    let state = box.checked ? 'add' : 'remove';
    state == 'add' ? this.filtersCount++ : this.filtersCount--;
    obj.prop = this.prop;
    this.rowClick.emit({obj, state});
  }

  removeAllSelection(): void {
    if (this.list) {
      this.filtersCount = 0;
      for (const row of Array.from(this.list.nativeElement.children)) {
        let box: any = row.firstElementChild;
        row.classList.remove('selected-dropdown-item');
        box.checked = false;
      }
    }
  }

  removeSelection(index: number): void {
    this.filtersCount--;
    let row = this.list.nativeElement.children[index];
    let box: any = row.firstElementChild;
    row.classList.remove('selected-dropdown-item');
    box.checked = false;
  }
}