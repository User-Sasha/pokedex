import {Component, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{
  // pokemons = [
  //   { 'id': 1, 'nom': 'Bulbizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  //     'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.70, 'poids': 6.9 },
  //   { 'id': 2, 'nom': 'Herbizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  //     'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 1, 'poids': 13 },
  //   { 'id': 3, 'nom': 'Florizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  //     'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 2, 'poids': 100 },
  //   { 'id': 4, 'nom': 'Salamèche', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  //     'categorie': 'lézard', 'type': 'feu', 'taille': 0.60, 'poids': 8.5 },
  //   { 'id': 5, 'nom': 'Reptincel', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  //     'categorie': 'flamme', 'type': 'feu', 'taille': 1.1, 'poids': 19 },
  //   { 'id': 6, 'nom': 'Dracaufeu', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  //     'categorie': 'flamme', 'type': ['feu', 'vol'], 'taille': 1.7, 'poids': 90.5 }
  // ];
  pokemons =[
    new Pokemon(1, 'Bulbizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'graine',['plante', 'poison'], 0.70, 6.9),
    new Pokemon(2, 'Herbizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'graine',['plante', 'poison'], 1, 13),
    new Pokemon(3, 'Florizarre', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      'graine',['plante', 'poison'], 2, 100),
    new Pokemon(4, 'Salamèche', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      'lézard',['feu'], 0.60, 8.5),
    new Pokemon(5, 'Reptincel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      'flamme',['feu'], 1.1, 19),
    new Pokemon(6, 'Dracaufeu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      'flamme',['feu', 'vol'], 1.7, 90.5)
  ]


  @Output()   public pokemonSelectionne: Pokemon | null;


  constructor() {
    this.pokemonSelectionne = null;

  }
  ngOnInit(): void {
  }

}
