import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroDetail } from "../models/hero-detail";
import { HeroServiceService } from "../services/hero-service.service";

@Component({
  selector: "app-edit-hero",
  templateUrl: "./edit-hero.component.html",
  styleUrls: ["./edit-hero.component.scss"],
})
export class EditHeroComponent implements OnInit {
  hero: HeroDetail;
  constructor(private heroService: HeroServiceService, private route: Router) {}

  ngOnInit(): void {
    this.hero = this.heroService.hero ||{
      _id: '',
      body: '',
      category: '',
      createdAt: new Date(),
      idAuthor: '',
      image: '',
      title: '',
      updatedAt: new Date()
    };
  }
  saveHero() {
    if(!this.hero._id){
      this.addNewHero();
      return;
    }
    this.heroService.saveHero(this.hero).subscribe((res) => {
      this.route.navigateByUrl("hero-list");
    });
  }
  cancel() {
    this.heroService.hero = null;
    this.route.navigateByUrl("hero-list");
  }

  addNewHero(){
    
    this.heroService.addHero(this.hero).subscribe(res=>{
      this.route.navigateByUrl("hero-list");
    });
  }
}
