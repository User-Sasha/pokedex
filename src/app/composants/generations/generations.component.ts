import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {ResultApi} from "../../modeles/ResultApi";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations: ResultApi[];
  nbreDeGenerations: number;


  constructor(private servicePokemons: PokemonsService) {
    this.nbreDeGenerations = 0;
    this.generations = [];
  }

  ngOnInit(){
    this.servicePokemons.getGenerations().subscribe(resultat => {
      this.generations = resultat.results;
      this.nbreDeGenerations = resultat.count;
    });
  }
}
