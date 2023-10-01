/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavigationIconComponent } from './navigation-icon.component';

describe('NavigationIconComponent', () => {
  let component: NavigationIconComponent;
  let fixture: ComponentFixture<NavigationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [NavigationIconComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
