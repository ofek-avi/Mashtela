import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SplashComponent } from './splash/splash.component';
import { RouterModule } from '@angular/router';
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
  showCookiesBanner = false;

  handleEnter() {
    this.showSplash = false;
    const consent = localStorage.getItem('cookiesAccepted');
    this.showCookiesBanner = consent !== 'yes' && consent !== 'no';
  }

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'yes');
    this.showCookiesBanner = false;
  }

  rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'no');
    this.showCookiesBanner = false;
  }
}
