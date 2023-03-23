
export interface PokemonsAPI<T> {
  count: number;
  next: String;
  previous: String;
  results: T[];


}
