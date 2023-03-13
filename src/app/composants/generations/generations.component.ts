import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {Generation} from "../../modeles/Generation";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations: [Generation];
  nbreDeGenerations: number;


  constructor(private servicePokemons: PokemonsService) {
    this.nbreDeGenerations = 0;
    this.generations = [new Generation('','')];
  }

  ngOnInit(){
    this.servicePokemons.getGenerations().subscribe(resultat => {
      this.generations = resultat.results;
      console.log(resultat.results);
      this.nbreDeGenerations = resultat.count;
    });
  }
}
