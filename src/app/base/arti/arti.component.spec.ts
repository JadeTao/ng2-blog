/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtiComponent } from './arti.component';

describe('ArtiComponent', () => {
  let component: ArtiComponent;
  let fixture: ComponentFixture<ArtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});