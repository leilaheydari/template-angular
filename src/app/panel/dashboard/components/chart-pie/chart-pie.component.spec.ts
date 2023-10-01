/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartPieComponent } from './chart-pie.component';

describe('ChartPieComponent', () => {
  let component: ChartPieComponent;
  let fixture: ComponentFixture<ChartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ChartPieComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
