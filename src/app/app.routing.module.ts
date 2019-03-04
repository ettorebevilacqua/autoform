import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
// import { FormEditorComponent } from "./form-editor/form-editor.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { DinamicContentComponent } from "./lib/dinamic-content/dinamic-content.component";
import { TabsModule } from "./common/tabs/tabs.module";
import { FormEditorModule } from "./form-editor/form-editor.module";


@NgModule({
  declarations: [
    ProfileEditorComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    TabsModule,
    RouterModule.forRoot([
      { path: "profile", component: ProfileEditorComponent },
      { path: "name", loadChildren: './form-editor/form-editor.module#FormEditorModule' },
      //  { path: 'dinamic-comp', component: RuntimeContentComponent },
      { path: "dinamic", component: DinamicContentComponent },
      { path: "**", redirectTo: "name" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
