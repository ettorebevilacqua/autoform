import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofFormComponent } from './autof-form.component';

describe('AutofFormComponent', () => {
  let component: AutofFormComponent;
  let fixture: ComponentFixture<AutofFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutofFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutofFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
