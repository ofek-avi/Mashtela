import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavigationComponent,
    SplashComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSplash = true;

  handleEnter() {
    this.showSplash = false;
  }
}
