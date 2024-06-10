import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductCarPageComponent } from './product-car-page/product-car-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/view', component: ProductDetailPageComponent },
  { path: 'product/car', component: ProductCarPageComponent },
  { path: 'car', component: CarPageComponent },

];
