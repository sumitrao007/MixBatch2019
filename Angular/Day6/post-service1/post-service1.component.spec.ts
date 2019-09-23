import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostService1Component } from './post-service1.component';

describe('PostService1Component', () => {
  let component: PostService1Component;
  let fixture: ComponentFixture<PostService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
