import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofJsonComponent } from './autof-json.component';

describe('AutofJsonComponent', () => {
  let component: AutofJsonComponent;
  let fixture: ComponentFixture<AutofJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutofJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutofJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
