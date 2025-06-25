import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
})
export class SplashComponent {
  @Output() enter = new EventEmitter<void>();

  onEnterShop() {
    this.enter.emit();
  }
}
