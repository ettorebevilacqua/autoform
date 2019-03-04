import { Component, OnInit, Input, TemplateRef } from '@angular/core';


@Component({
  selector: 'dinamic-content',
  template: `
    <ng-template #headerTemplate>
      <div class="default-content">
            Default headerTemplate
      </div>
    </ng-template>
    
    <ng-template #bodyTemplate>
      <div class="default-content">
            Default bodyTemplate
      </div>
    </ng-template>

    <ng-template #default >
      <div class="default-content">
            Default empity
      </div>
    </ng-template>

    <ng-container *ngTemplateOutlet="headerTemplate ? headerTemplate: default">
    </ng-container>
    <ng-container  *ngTemplateOutlet="bodyTemplate ? bodyTemplate: default">
    </ng-container>
    <ng-container *ngTemplateOutlet="footerTemplate ? footerTemplate: default">
    </ng-container>

`})

export class DinamicContentComponent {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
}
