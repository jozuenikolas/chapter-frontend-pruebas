import { Component, OnInit } from '@angular/core';
import { ListMarvel } from 'src/app/commons/models/list-marvel.type';
import { GLOBAL_CONST } from 'src/app/commons/utils/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataS: ListMarvel[] = []
  titleNew: string = GLOBAL_CONST.NEW.TILE 
  valueFormData: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeValueFormData(event: any) {
    this.valueFormData = event
  }

  dataSearch(event: any) {
    this.dataS = event
  }

}
