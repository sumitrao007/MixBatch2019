import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelParentComponent } from './multilevel-parent.component';

describe('MultilevelParentComponent', () => {
  let component: MultilevelParentComponent;
  let fixture: ComponentFixture<MultilevelParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
