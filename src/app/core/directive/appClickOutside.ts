import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setClickOutside } from 'src/app/store/shared/shared.actions';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(
    private eRef: ElementRef,
    private store: Store<AppState>
  ) { }


  @HostListener('document:click', ['$event'])
  clickout(event: Event): any {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.store.dispatch(setClickOutside({ status: 'inside' }));
    } else {
      this.store.dispatch(setClickOutside({ status: 'outside' }));
    }
  }

}



