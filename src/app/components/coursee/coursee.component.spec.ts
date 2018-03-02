import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseeComponent } from './coursee.component';

describe('CourseeComponent', () => {
  let component: CourseeComponent;
  let fixture: ComponentFixture<CourseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
