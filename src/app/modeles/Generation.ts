export class Generation {

  private _name: string;
  private _url: string;


  constructor(nom: string, url: string) {
    this._name = nom;
    this._url = url;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
