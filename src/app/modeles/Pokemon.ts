export class Pokemon {
  private _id: number;
  private _nom: string;
  private _img: string;
  private _categorie: string;
  private _type: string[];
  private _taille: number;
  private _poids: number;


  constructor(id: number, nom: string, img: string, categorie: string, type: string[], taille: number, poids: number) {
    this._id = id;
    this._nom = nom;
    this._img = img;
    this._categorie = categorie;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get categorie(): string {
    return this._categorie;
  }

  set categorie(value: string) {
    this._categorie = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }


}
