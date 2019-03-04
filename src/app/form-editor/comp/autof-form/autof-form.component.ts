import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { DataModel } from '../../store/state';
import { ModelEditorStore } from '../../store';
import { FormHelper } from 'src/app/lib/formHelper';

@Component({
  selector: 'app-autof-form',
  template: `
  <div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./autof-form.component.css']
})
export class AutofFormComponent implements OnInit {

  @Input() data: DataModel;
  template = '';
  fb : FormBuilder;
  form:FormGroup;
  errorMessage:string;

  constructor() {}

  ngOnInit() {
  }

  loadModelData(data:DataModel){
    const h = new FormHelper(this.fb);
    const out = h.generateFbFromModel(this.data);
    this.form = h.form;
    this.template = h.getHtml();
  }

}
