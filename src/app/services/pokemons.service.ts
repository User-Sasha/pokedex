import { Injectable } from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {HttpClient} from "@angular/common/http";
import { GenerationAPI } from '../modeles/generation-api';
import {PokemonsAPI} from "../modeles/pokemons-api";
import {PokemonAPI} from "../modeles/pokemon-api";
import {Observable} from "rxjs";
import {ResultApi} from "../modeles/ResultApi";



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemons: Pokemon[];

constructor(private http: HttpClient) {
  this.pokemons = [];
}

  public getGenerations(): Observable<GenerationAPI> {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationAPI>(url);
  }

  public getPokemons():Observable<PokemonsAPI<ResultApi>>{
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokemonsAPI<ResultApi>>(url);
  }



  public getPokemon(url: string):Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }



  public rechercherPokemon(nomDuPokemon: string): Pokemon[]{
    let regex = new RegExp(nomDuPokemon.trim(), 'gi');
    return this.pokemons.filter(pokemon => pokemon.name.match(regex));
  }

}


