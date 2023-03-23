import {Component, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";
import {PokemonsService} from "../../services/pokemons.service";
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons";
import {PokemonAPI} from "../../modeles/pokemon-api";
import {PokemonsAPI} from "../../modeles/pokemons-api";
import {ResultApi} from "../../modeles/ResultApi";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{

  public resultatApi: ResultApi[] = [];
  public pokemons: ResultApi[];
  public compte: number;
  //faOptinMonster = faOptinMonster;
  public rechercherPokemon: string;
  public easterEggs: boolean;

  @Input() public url: string;
  @Output() public pokemonSelectionne: Pokemon | null;



  constructor(private servicePokemons: PokemonsService) {
    this.pokemons = [];
    this.compte = 0;
    this.rechercherPokemon = '';
    this.easterEggs = false;
    this.pokemonSelectionne = null;
    // this.servicePokemons.getApi().subscribe(resApi => {
    //   this.resultatApi = resApi.results; })
    this.url = '';
  }
  ngOnInit() {
    this.servicePokemons.getPokemons().subscribe(res => {
      this.pokemons = res.results;
      this.compte = res.count;
    });
  }

  //recuperer via l'api et stocker url dans un tableau faire requete api pour chaque url recuperer dans l'array
  // public recuperationApi(): void {
  //   this.resultatApi.forEach(element => {
  //     console.log(element.url);
  //   })
  // }

  public rechercher(nomDuPokemon: string): void {
    this.servicePokemons.rechercherPokemon(nomDuPokemon);
    this.easterEggs = false;
    if (nomDuPokemon == 'C3PO') {
      this.easterEggs = true;
    }
    // this.recuperationApi();
  }

  // public annulerRecherche(): void{
  //   this.servicePokemons.getPokemons().subscribe(res => this.pokemons = res.results);
  //   this.rechercherPokemon.nomRechercher('');
  // }


  //Mettre NgIf dans le HTML
  public verificationExistancePokemon(tableauDePokemon: Pokemon[]): string | void{
    if (tableauDePokemon?.length<1){
      return 'Auncun de pokémon correspond';
    }
  }

}
