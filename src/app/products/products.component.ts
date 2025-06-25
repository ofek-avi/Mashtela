import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Plant {
  name: string;
  price: number;
  image: string;
  stock: number;
  description: string;
  quantityToBuy?: number;
}

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  searchTerm: string = '';
  descriptionOpen: string | null = null;

  plants: Plant[] = [
    {
      name: 'לימון',
      price: 45,
      image: 'https://www.yagurgan.co.il/Media/Uploads/NB1720420(1).webp',
      stock: 10,
      description: 'עץ פרי עמיד, מתאים לגידול בגינה ובמרפסת.',
      quantityToBuy: 1,
    },
    {
      name: 'תפוז',
      price: 50,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
      stock: 8,
      description: 'עץ פרי מתוק, דורש שמש והרבה מים.',
      quantityToBuy: 1,
    },
    {
      name: 'רוזמרין',
      price: 20,
      image:
        'https://mashtela-urbanit.co.il/images/stories/virtuemart/product/Rozmarin3.jpg',
      stock: 15,
      description: 'שיח תבלין ריחני, מתאים לכל גינה.',
      quantityToBuy: 1,
    },
    {
      name: 'בזיליקום',
      price: 15,
      image:
        'https://mashtela-urbanit.co.il/images/stories/virtuemart/product/Bazil1.jpg',
      stock: 20,
      description: 'עשב תבלין אהוב, מתאים לעציצים ולגינה.',
      quantityToBuy: 1,
    },
    {
      name: 'נענע',
      price: 18,
      image: 'https://www.plants4u.co.il/wp-content/uploads/2022/11/103-1.jpg',
      stock: 14,
      description: 'עשב תבלין ריחני, מעולה לתה ולמשקאות.',
      quantityToBuy: 1,
    },
    {
      name: 'זית',
      price: 120,
      image:
        'https://mashtela-urbanit.co.il/images/stories/virtuemart/product/%D7%96%D7%99%D7%AA%20%D7%A0%D7%A0%D7%A1%D7%99.jpg',
      stock: 6,
      description: 'עץ ים תיכוני קלאסי, עמיד ליובש.',
      quantityToBuy: 1,
    },
    {
      name: 'לוונדר',
      price: 28,
      image:
        'https://www.mashtelaadhabait.com/Media/UploadMobile/%D7%A8%D7%A4%D7%95%D7%90%D7%99_4_%D7%9C_%D7%A6%D7%A0%D7%95%D7%A2_%D7%95%D7%99%D7%A4%D7%94(2).webp',
      stock: 12,
      description: 'שיח ריחני עם פריחה סגולה, מושך דבורים.',
      quantityToBuy: 1,
    },
    {
      name: 'פטרוזיליה',
      price: 12,
      image:
        'https://www.nativityseeds.com/media/catalog/product/cache/37e22106bf8bd6c2aeeda263b9ee481e/c/u/curly-parsley-transplants.jpg',
      stock: 18,
      description: 'עשב תבלין פופולרי, גדל בקלות.',
      quantityToBuy: 1,
    },
    {
      name: 'סוקולנט',
      price: 25,
      image:
        'https://mashtelatramatgan.co.il/wp-content/uploads/2020/07/%D7%A1%D7%95%D7%A7%D7%95%D7%9C%D7%A0%D7%98-%D7%A7%D7%A2%D7%A8%D7%94-20-%D7%92%D7%93%D7%95%D7%9C-3.jpg',
      stock: 22,
      description: 'צמח עמיד במיוחד, דורש מעט מים.',
      quantityToBuy: 1,
    },
    {
      name: 'גרניום',
      price: 22,
      image:
        'https://meshek50.co.il/wp-content/uploads/2020/10/523C4AD4-0446-460E-9C83-62477E711D9B.jpeg',
      stock: 11,
      description: 'פרח צבעוני, מתאים לעציצים ולגינה.',
      quantityToBuy: 1,
    },
  ];

  cart: CartItem[] = [];
  showCheckout = false;
  message = '';

  customer = {
    name: '',
    phone: '',
    address: '',
  };

  get filteredPlants(): Plant[] {
    if (!this.searchTerm.trim()) {
      return this.plants;
    }
    return this.plants.filter((plant) =>
      plant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleDescription(plantName: string) {
    this.descriptionOpen =
      this.descriptionOpen === plantName ? null : plantName;
  }

  addToCart(plant: Plant) {
    if (!plant.quantityToBuy || plant.quantityToBuy < 1) {
      this.message = 'יש לבחור כמות חוקית!';
      return;
    }
    if (plant.quantityToBuy > plant.stock) {
      this.message = `אין מספיק מלאי ל-${plant.name}. נשארו רק ${plant.stock}.`;
      return;
    }
    const existing = this.cart.find((item) => item.name === plant.name);
    if (existing) {
      if (existing.quantity + plant.quantityToBuy > plant.stock) {
        this.message = `אין מספיק מלאי ל-${plant.name}.`;
        return;
      }
      existing.quantity += plant.quantityToBuy;
      existing.total = existing.quantity * plant.price;
    } else {
      this.cart.push({
        name: plant.name,
        price: plant.price,
        image: plant.image,
        quantity: plant.quantityToBuy,
        total: plant.price * plant.quantityToBuy,
      });
    }
    this.message = `${plant.quantityToBuy} × ${plant.name} נוספו לסל!`;
    plant.quantityToBuy = 1;
  }

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.total, 0);
  }

  finishOrder() {
    this.showCheckout = true;
    this.message = '';
  }

  submitOrder() {
    if (!this.customer.name || !this.customer.phone || !this.customer.address) {
      this.message = 'נא למלא את כל הפרטים!';
      return;
    }
    // עדכון מלאי
    this.cart.forEach((item) => {
      const plant = this.plants.find((p) => p.name === item.name);
      if (plant) plant.stock -= item.quantity;
    });
    this.message = `תודה ${this.customer.name}! ההזמנה בוצעה בהצלחה.`;
    this.cart = [];
    this.showCheckout = false;
    this.customer = { name: '', phone: '', address: '' };
  }

  cancelOrder() {
    this.showCheckout = false;
    this.message = '';
  }
}
