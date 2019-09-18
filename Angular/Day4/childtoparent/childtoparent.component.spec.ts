import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoparentComponent } from './childtoparent.component';

describe('ChildtoparentComponent', () => {
  let component: ChildtoparentComponent;
  let fixture: ComponentFixture<ChildtoparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtoparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
