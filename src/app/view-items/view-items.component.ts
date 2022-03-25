import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  constructor(private _modelService: ModelService) { }

  items: Item[] = [];  

  public printItems() {
    this.items = [];
    this._modelService.getItems().forEach(e => {
      const i: Item = { name: e.name };
      this.items.push(i);
    });

    //console.log(this._modelService.getItems());
  }

  ngOnInit(): void {
  }

}
