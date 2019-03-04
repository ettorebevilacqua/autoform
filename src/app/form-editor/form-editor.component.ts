import { DataModel } from './store/state';
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { FormHelper } from "../lib/formHelper";

import { data } from "./mock/mock1";
import { ModelEditorStore } from "./store";


@Component({
  selector: "app-form-editor",
  templateUrl: "./form-editor.component.html",
  styleUrls: ["./form-editor.component.css"]
}) 
export class FormEditorComponent implements OnInit {

   profileForm = this.fb.group({
     id: [''],
     stato: ['']
   });

   modelData : DataModel;

  template: string = "init template";
  constructor(private fb: FormBuilder,private store: ModelEditorStore) {

  }

  upDateModel($event){
    this.store.update($event)
  }

  ngOnInit() {
  
    this.store.state$.subscribe(data => {
      this.modelData=data;
      console.log('data xxx=',data);
     });

     this.store.update({data:{a:1, b:2}});
    // this.template="<p><template xxx </p>";
  }

  loadModelData(data:DataModel){
    const h = new FormHelper(this.fb);
    const out = h.generateFbFromModel(this.modelData);
    this.profileForm = h.form;
    this.template = h.getHtml();
  }
  updateName() {
    // this.name.setValue('Nancy');
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
