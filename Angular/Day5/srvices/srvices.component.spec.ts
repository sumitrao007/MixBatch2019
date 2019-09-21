import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvicesComponent } from './srvices.component';

describe('SrvicesComponent', () => {
  let component: SrvicesComponent;
  let fixture: ComponentFixture<SrvicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrvicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
