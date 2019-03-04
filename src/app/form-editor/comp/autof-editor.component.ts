import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ModelEditorStore } from "..//store/model-editor-store";
import { DataModel } from "../store/state";

enum EnumParse {
  "object",
  "html"
}

@Component({
  selector: "autof-editor",
  template: `
    <h4>Model Data</h4>

    <textarea
      col="189"
      row="12"
      name="dataText"
      [(ngModel)]="dataText"
    ></textarea>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
    <p><button (click)="update()">Model data</button> {{ data | json }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class autofEditorComponent implements OnInit {
  @Input() data: DataModel;
  @Input() parse: EnumParse;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();

  dataText = "";
  errorMessage: string;

  constructor(private store: ModelEditorStore) {}

  ngOnInit() {
    this.dataText = JSON.stringify(this.data);
  }


  private tryParser(parser, text):string{
    try {
      return parser(text);
    } catch(objError) {
        this.errorMessage = objError.name + " " + objError.message;
        return null;
    }
  }

  update() {
    this.errorMessage = null;
    let out = this.dataText;
    const s={
      [EnumParse.html]:a=>a,
      [EnumParse.object]:JSON.parse
    }
    this.data = s[this.parse] ? this.tryParser(s[this.parse] , this.dataText) : null;
    
    if (parse){
      this.data = parse; 
      this.onUpdate.emit(this.data); 
    }
  }
 
}
