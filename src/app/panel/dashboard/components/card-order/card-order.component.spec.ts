/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardOrderComponent } from './card-order.component';

describe('CardOrderComponent', () => {
  let component: CardOrderComponent;
  let fixture: ComponentFixture<CardOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [CardOrderComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
