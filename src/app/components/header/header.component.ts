import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListMarvel } from 'src/app/commons/models/list-marvel.type';
import { GLOBAL_CONST } from 'src/app/commons/utils/constants';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text: string = ''
  title: string = GLOBAL_CONST.HEADER.TITLE
  changeValueFormData = false
  @Output() openFormDataBoolean = new EventEmitter<boolean>()
  @Output() dataSearch = new EventEmitter<ListMarvel[]>()

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
  }

  openFormData() {
    if (this.changeValueFormData) {
      this.changeValueFormData = false
      this.openFormDataBoolean.emit(false)
    } else {
      this.changeValueFormData = true
      this.openFormDataBoolean.emit(true)
    }
  }

  pressEvent(event: any) {
    if (event.key === "Enter") {
      this.marvelService.getMarvel(this.text).subscribe((response: any) => {
        this.dataSearch.emit(response)
      })
    }
  }

}
