import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';
import {Pokemon} from "../../modeles/Pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonSelectionne: Pokemon | null;

  @Input() public pokemon! : Pokemon;

  @Output() evenementClicImage = new EventEmitter;

  constructor() {
    this.pokemonSelectionne = null;
  }

  ngOnInit(): void {
  }

  clicSurImage(nom: string){
    this.evenementClicImage.emit(nom);
  }


}
