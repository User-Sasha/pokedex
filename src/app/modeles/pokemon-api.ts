export class PokemonAPI {
  name: String;
  sprites: {
    back_default: String;
    front_default: String;
  } | any
  height: number;
  weight: number;


  constructor() {
    this.name = '';
    this.height = 0;
    this.weight = 0;
  }
}
