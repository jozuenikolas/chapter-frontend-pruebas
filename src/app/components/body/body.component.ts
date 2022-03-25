import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.marvelService.getListMarvel().subscribe(response => {
      console.log(response)
    })
  }

}
