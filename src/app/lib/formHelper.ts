// https://github.com/jamesmcnamara/shades
// ngTemplateOutlet

import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { dataTypes, scan } from './helper';

export type BuilderData = FormGroup | FormArray | FormControl;
export type modelData = Object;

interface InputsForm {
  path: string,
  id: string,
  label: string,
  maxLength: number,
  placeholder: string
}

export class FormHelper {
  model: any;
  form: FormGroup = this.fb.group({});
  html: Array<string> = [];

  constructor(public fb: FormBuilder) { }

  cleanForm() {
    this.form = this.fb.group({});
  }

  onObject(acc, key, obj, path, isEnd) {
    if (isEnd) {
      this.html.push(key === '' ? '</form>' : '</div>');
      return acc;
    }
    const group = this.fb.group({});
    if (key === '') {
      this.html.push('<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">');
    } else {
      const temp = acc.constructor && acc.constructor.name === 'FormArray' ?
        acc.push(group) : acc.addControl(key, group);
      this.html.push('<div formGroupName="' + key + '">');
    }

    console.log('onObject path=', path, acc);

    return key === '' ? acc : group;
  }

  onArray(acc, key, list, path, isEnd) {
    if (isEnd) {
      this.html.push(key === '' ? '</form>' : '</div>');
      return acc;
    }
    console.log('onArray  path=', path);
    const arr = this.fb.array([]);
    if (key === '') {
      this.html.push('<form [formGroup]="formGroup" (ngSubmit)="onSubmit()")');
    } else {
      const temp = acc.constructor && acc.constructor.name === 'FormArray' ?
        acc.push(arr) : acc.addControl(key, arr); // new FormArray([]); // acc.addControl(key, arr);
    }
    this.html.push('<div formArrayName="' + key + '">');

    return arr;
  }

  onValue(acc, key, value, path, typeValue) {

    console.log('onValue path=', path);

    const ctrl = this.fb.control(value); // new FormControl(value); // this.fb.array([]);
    if (acc.constructor && acc.constructor.name === 'FormArray'){
     // const fg =  this.fb.group({});
     // fg.addControl(key, ctrl);
      acc.push(ctrl); 
    } else {
        acc.addControl(key, ctrl); 
    }
     

    this.html.push('<input type="text" formControlName="' + key + '">');
    return acc;
  }

  getHtml() {
    return this.html.join('\n');
  }

  generateFbFromModel(model): any {
    const typeValue = dataTypes.get(model);

    const fb = typeValue === dataTypes.array ?  this.fb.array([]) :
      typeValue === dataTypes.object ?  this.fb.group({}) :  this.fb.control(null);

    const scanner = scan(this.onObject.bind(this), this.onArray.bind(this), this.onValue.bind(this));
    this.form = scanner(fb, model) as FormGroup;
    console.log('generateFbFromModel ', this.form);
    console.log('generateFbFromModel html ', this.html);
    return this.form;
  }

}
