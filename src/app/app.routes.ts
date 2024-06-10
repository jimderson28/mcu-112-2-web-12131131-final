import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CarPageComponent } from './car-page/car-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'car', component: CarPageComponent },

];
