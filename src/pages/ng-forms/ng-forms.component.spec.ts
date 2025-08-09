import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormsComponent } from './ng-forms.component';

describe('NgFormsComponent', () => {
  let component: NgFormsComponent;
  let fixture: ComponentFixture<NgFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
