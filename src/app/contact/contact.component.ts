import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sent = false;

  sendMessage() {
    if (this.name && this.email && this.message) {
      this.sent = true;
     
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
