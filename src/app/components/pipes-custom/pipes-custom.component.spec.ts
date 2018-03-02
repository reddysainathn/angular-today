import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCustomComponent } from './pipes-custom.component';

describe('PipesCustomComponent', () => {
  let component: PipesCustomComponent;
  let fixture: ComponentFixture<PipesCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
