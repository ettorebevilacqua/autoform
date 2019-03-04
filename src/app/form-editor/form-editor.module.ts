import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormEditorRoutingModule } from './form-editor-routing.module';
import { FormEditorComponent } from './form-editor.component';
import { TabsModule } from '../common/tabs/tabs.module';
import { RuntimeContentComponent } from '../lib/runtime-content.component';
import { AutofJsonComponent } from './comp/autof-json/autof-json.component';
import { TreeComponent } from './comp/tree/tree.component';
import { AutofFormComponent } from './comp/autof-form/autof-form.component';
import { AppStore, ModelEditorStore } from './store';
import { autofEditorComponent } from './comp/autof-editor.component';

@NgModule({
  declarations: [FormEditorComponent, RuntimeContentComponent, AutofJsonComponent, TreeComponent, AutofFormComponent, autofEditorComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, TabsModule,
    FormEditorRoutingModule
  ],
  exports: [FormEditorComponent],
  providers : [AppStore, ModelEditorStore]
})
export class FormEditorModule { }
