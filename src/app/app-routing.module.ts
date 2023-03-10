import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from
    './composants/generations/generations.component';
import { PokemonsComponent } from
    './composants/pokemons/pokemons.component';
import { CreationComponent } from
    './composants/compte/creation/creation.component';
import { ConnectionComponent } from
    './composants/compte/connection/connection.component';

const routes: Routes = [
  { path: 'generations', component: GenerationsComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'creerCompte', component: CreationComponent },
  { path: 'seConnecter', component: ConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
