import {ResultApi} from "./ResultApi";

export class GenerationAPI {
  count: number;
  results: ResultApi[];

  constructor() {
    this.count = 0;
    this.results = [];
  }

}
