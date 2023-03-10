import { Injectable } from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {HttpClient} from "@angular/common/http";
import { GenerationAPI } from '../modeles/generation-api';



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  // pokemons =[
  //   new Pokemon(1, 'Bulbizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  //   'graine',['plante', 'poison'], 0.70, 6.9),
  //   new Pokemon(2, 'Herbizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  //   'graine',['plante', 'poison'], 1, 13),
  //   new Pokemon(3, 'Florizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  //     'graine',['plante', 'poison'], 2, 100),
  //   new Pokemon(4, 'Salamèche', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  //     'lézard',['feu'], 0.60, 8.5),
  //   new Pokemon(5, 'Reptincel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  //     'flamme',['feu'], 1.1, 19),
  //   new Pokemon(6, 'Dracaufeu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  //     'flamme',['feu', 'vol'], 1.7, 90.5)
  // ]

  pokemons = [
      new Pokemon(1, 'Bulbizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      'graine',['plante', 'poison'], 0.70, 6.9)
    ]

  constructor(private http: HttpClient) { }

  getGenerations() {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationAPI>(url);
  }

  getPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.pokemons;
  }

  comptagePokemons(){
    return this.pokemons.length;
  }

  rechercherPokemon(nomDuPokemon: string){
    let regex = new RegExp(nomDuPokemon.trim(), 'gi');
    return this.pokemons.filter(pokemon => pokemon.nom.match(regex));
  }

}


