import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';
import {Pokemon} from "../../modeles/Pokemon";
import {PokemonsService} from "../../services/pokemons.service";
import {ResultApi} from "../../modeles/ResultApi";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonSelectionne: Pokemon | null;

  @Input() public url! : string;

  public pokemon: Pokemon | any;

  public resultatApi: ResultApi[] = [];

  @Output() evenementClicImage = new EventEmitter;


  constructor(private servicePokemons: PokemonsService) {
    this.pokemonSelectionne = null;
  }

  ngOnInit(): void {
    this.servicePokemons.getPokemon(this.url).subscribe(resultatApiPokemon => {
      this.pokemon = resultatApiPokemon;
    })
    this.url = "https://pokeapi.co/api/v2/pokemon-species/"+this.url.charAt(this.url.length - 2);
    this.servicePokemons.getPokemon(this.url).subscribe(resultatApiPokemon => {
      console.log(resultatApiPokemon);
      this.pokemon.egg_groups = resultatApiPokemon.egg_groups;


    })

  }

  // public recuperationCategorie(): void {
  //   this.servicePokemons.getApi().subscribe(res => {
  //         // this.resultatApi[0].url = res.results;
  //         console.log(res.results);
  //     });
  // }

  clicSurImage(nom: string){
    this.evenementClicImage.emit(nom);
  }

}
