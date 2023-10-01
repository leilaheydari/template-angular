/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrafficComponent } from './traffic.component';

describe('TrafficComponent', () => {
  let component: TrafficComponent;
  let fixture: ComponentFixture<TrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [TrafficComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
