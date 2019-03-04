import { Store } from "./store";
import { CoffeeElectionState, DataModelState, DataModel } from "./state";
import { Injectable } from "@angular/core";

@Injectable()
export class ModelEditorStore extends Store<DataModelState> {
  constructor () {
    super(new DataModelState());
  }
  

  update(data: DataModel): void {
    this.setState({
      ...this.state,
      data: data
    });
  }

  parseJson(){

  }

  addCandidate (name: string): void {}
}