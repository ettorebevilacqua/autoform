export class CoffeeElectionState {
  candidates: {name: string, votes: number}[] = [];
}

export type DataModel = any;
export class DataModelState {
  data:DataModel;
}