import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Composants
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
// locale : France
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import {FormsModule} from "@angular/forms";
import { BarreDeNavigationComponent } from './composants/barre-de-navigation/barre-de-navigation.component';
import {RouterOutlet} from "@angular/router";
import { CreationComponent } from './composants/compte/creation/creation.component';
import { ConnectionComponent } from './composants/compte/connection/connection.component';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    BarreDeNavigationComponent,
    CreationComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
