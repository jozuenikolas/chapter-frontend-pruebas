import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon?: ICON_TYPE;
  @Input() text?: string;
  @Input() disabled = false;
  @Input() type: string = 'OK';
  @Output() handleEmit: EventEmitter<string> = new EventEmitter();

  iconImage = '';
  textButton = '';
  classDanger = false;

  constructor() {}

  ngOnInit(): void {
    this.setIcon();
  }

  setIcon() {
    switch (this.icon) {
      case ICONS.EDIT:
        this.iconImage = 'assets/icons/edit.svg';
        break;
      case ICONS.DELETE:
        this.iconImage = 'assets/icons/delete.svg';
        break;
      case ICONS.SAVE:
        this.classDanger = true;
        this.iconImage = 'assets/icons/save.svg';
        break;
      case ICONS.CLOSE:
        this.classDanger = true;
        this.iconImage = 'assets/icons/close.svg';
        break;
      case ICONS.ADD:
        this.classDanger = true;
        this.iconImage = 'assets/icons/add.svg';
        break;

      default:
        break;
    }
  }

  handledEmit() {
    this.handleEmit.emit(this.type);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICON_TYPE } from 'src/app/enums/global.type';
import { ICONS } from '../../enums/global.type';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class ButtonModule {}
