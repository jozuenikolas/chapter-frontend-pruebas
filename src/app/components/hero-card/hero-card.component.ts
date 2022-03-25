import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() onEmitHeroToEdit = new EventEmitter<Hero>();
  @Output() onDeleteSucces = new EventEmitter<boolean>();

  constructor(private readonly _heroService: HeroService) {}

  ngOnInit(): void {}

  onClickEdit() {
    this.onEmitHeroToEdit.emit(this.hero);
  }

  onClickDelete() {
    this._heroService.deleteHero(this.hero._id!).subscribe((data) => {
      if (data.message === 'Personaje eliminado') {
        this.onDeleteSucces.emit(true);
      }
    });
  }
}
