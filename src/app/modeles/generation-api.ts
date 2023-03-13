import {Generation} from "./Generation";

export class GenerationAPI {
  count: number;
  results: [Generation];

  constructor() {
    this.count = 0;
    this.results = [new Generation('','')];
  }

}
