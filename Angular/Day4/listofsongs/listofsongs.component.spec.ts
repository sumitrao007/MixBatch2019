import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsongsComponent } from './listofsongs.component';

describe('ListofsongsComponent', () => {
  let component: ListofsongsComponent;
  let fixture: ComponentFixture<ListofsongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofsongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
