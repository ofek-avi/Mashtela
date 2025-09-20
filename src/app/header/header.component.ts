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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Theodor_Herz007.jpg/200px-Theodor_Herz007.jpg' ;
  imgWidth = 80;
  imgHeight = 80;

  getSubtitle(): string {
    return 'המשתלה המובילה בצפון';
  }
}
