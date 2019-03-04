import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormEditorComponent } from './form-editor.component';
import { TabsModule } from '../common/tabs/tabs.module';


const routes: Routes = [
  { path: '', component: FormEditorComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule, TabsModule],
  exports: [RouterModule]
})
export class FormEditorRoutingModule { }
