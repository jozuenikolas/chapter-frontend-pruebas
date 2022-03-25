import { Component, OnInit } from '@angular/core';
import { GLOBAL_CONST } from 'src/app/commons/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = GLOBAL_CONST.HEADER.TITLE

  constructor() { }

  ngOnInit(): void {
  }

}
