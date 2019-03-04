import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ModelEditorStore } from "../../store/model-editor-store";
import { DataModel } from "../../store/state";

@Component({
  selector: "app-autof-json",
  templateUrl: "./autof-json.component.html",
  styleUrls: ["./autof-json.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutofJsonComponent implements OnInit {
  @Input() data: DataModel;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();
  
  dataText = '';
  errorMessage:string;

  constructor(private store: ModelEditorStore) {}

  ngOnInit() {
    this.dataText = JSON.stringify(this.data);
  }

  update(){
    try {
      this.data = JSON.parse(this.dataText); 
      this.errorMessage=null;
      this.onUpdate.emit(this.data);
  } catch (objError) {// if (objError instanceof SyntaxError) {
          this.errorMessage=objError.name+' '+objError.message;
  }
    
  }
}
