import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = ' אופק סעדון - משתלה';
  subtitle = this.getSubtitle();
  imgUrl =
    'https://sloner.co.il/wp-content/uploads/2019/03/%D7%97%D7%9E%D7%9E%D7%AA-%D7%A6%D7%9E%D7%97%D7%99-%D7%92%D7%9F-%D7%A4%D7%95%D7%A8%D7%97%D7%99%D7%9D-%D7%9E%D7%A9%D7%AA%D7%9C%D7%AA-%D7%A1%D7%9C%D7%95%D7%A0%D7%A8.jpg';
  imgWidth = 80;
  imgHeight = 80;

  getSubtitle(): string {
    return 'המשתלה המובילה בצפון';
  }
}
