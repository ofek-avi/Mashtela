import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BranchComponent } from './branch/branch.component';
import { PlantComponent } from './plant/plant.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'branches', component: BranchComponent },
  { path: 'plant', component: PlantComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
