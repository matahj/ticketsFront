import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer01Component } from './footer01.component';

describe('Footer01Component', () => {
  let component: Footer01Component;
  let fixture: ComponentFixture<Footer01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footer01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
