/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakeJuiceComponent } from './make-juice.component';

describe('MakeJuiceComponent', () => {
  let component: MakeJuiceComponent;
  let fixture: ComponentFixture<MakeJuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeJuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
