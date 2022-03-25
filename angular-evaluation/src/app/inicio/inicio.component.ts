import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CharacterDetailsService } from '../character-details.service';
import { CharacterDetails } from '../model/character-details';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  superCharacters: CharacterDetails [] = [];
  characterSubscription: Subscription = new Subscription();
  selectedCharacter: CharacterDetails = {
    id: '',
    title: '',
    image: '',
    body: '',
    category: '',
    idAuthor: ''
  }

  superCharctrForm: FormGroup = new FormGroup({

  });

  constructor(private myService: CharacterDetailsService) {   
  }

  ngOnInit() {
    this.characterSubscription = this.myService.getCharacters().subscribe(character=>{
      this.superCharacters = character;
    });

    this.superCharctrForm = new FormGroup({
      id: new FormControl(''),
      idAuthor: new FormControl(),
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      image: new FormControl(this.selectedCharacter.image,[Validators.required])
    })
  }

  addUpdateCharctr() {
    
    let currentCharacter = this.superCharctrForm.getRawValue();
    let addedCharacter = {
      id: currentCharacter.id,
      title: currentCharacter.name,
      image: currentCharacter.image,
      body: currentCharacter.desc,
      category: 'main',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  }

  get id() {
    return this.superCharctrForm.get('id');
  }

  get idAuthor() {
    return this.superCharctrForm.get('idAuthor');
  }

  get name() {
    return this.superCharctrForm.get('name');
  }

   get desc() {
    return this.superCharctrForm.get('desc');
  }

  get image() {
    return this.superCharctrForm.get('image');
  }

}
