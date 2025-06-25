import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent {
  branches = [
    {
      name: 'תל אביב',
      address: 'רחוב החשמונאים 100, תל אביב',
      map: 'https://maps.google.com/?q=רחוב החשמונאים 100, תל אביב',
    },
    {
      name: 'חיפה',
      address: 'שדרות ההסתדרות 200, חיפה',
      map: 'https://maps.google.com/?q=שדרות ההסתדרות 200, חיפה',
    },
    {
      name: 'ירושלים',
      address: 'רחוב יפו 50, ירושלים',
      map: 'https://maps.google.com/?q=רחוב יפו 50, ירושלים',
    },
  ];
}
