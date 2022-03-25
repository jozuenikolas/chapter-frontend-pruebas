import { Component, Input, OnInit, Output } from '@angular/core';
import { ListMarvel } from 'src/app/commons/models/list-marvel.type';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() listMarvel: ListMarvel[] = []

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.marvelService.getListMarvel().subscribe((response: any) => {
      this.listMarvel = response
    })
  }

}
