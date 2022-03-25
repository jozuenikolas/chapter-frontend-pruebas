import { Component, Input, OnInit } from '@angular/core';
import { GLOBAL_CONST } from 'src/app/commons/utils/constants';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  name: string = GLOBAL_CONST.NEW.NAME
  description: string = GLOBAL_CONST.NEW.DESCRIPTION
  img: string = GLOBAL_CONST.NEW.IMAGE

  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
