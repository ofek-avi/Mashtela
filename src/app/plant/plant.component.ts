import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PlantEntry {
  name: string;
  price: number;
  quantity: number;
  total: number;
  category: string;
  date: string;
}

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
})
export class PlantComponent {
  name = '';
  price: number = 0;
  quantity: number = 0;
  category = '';
  total: number = 0;

  plants: PlantEntry[] = [];
  errorMsg = '';

  calculateTotal() {
    if (!this.name || this.price <= 0 || this.quantity <= 0) {
      this.errorMsg = 'נא למלא שם, מחיר וכמות תקינים!';
      return;
    }
    this.total = this.price * this.quantity;
    this.errorMsg = '';
    // הוספה להיסטוריה
    this.plants.push({
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      total: this.total,
      category: this.category,
      date: new Date().toLocaleString('he-IL'),
    });
  }

  resetForm() {
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.category = '';
    this.total = 0;
    this.errorMsg = '';
  }
  get totalSum(): number {
    return this.plants.reduce((sum, p) => sum + p.total, 0);
  }
  clearHistory() {
    this.plants = [];
  }
}
