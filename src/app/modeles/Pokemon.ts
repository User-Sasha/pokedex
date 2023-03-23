export interface Pokemon {

  id: number;
  name: string;
  sprites: {
    back_default: String;
    front_default: String;
  }
  egg_groups: [{name: string }];
  types: [{type: {name: string}}];
  height: number;
  weight: number;


  // nomRechercher(value: string) {
  //   this._nom = value;
  // }





}
