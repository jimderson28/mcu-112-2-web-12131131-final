import { Product } from './../model/product';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
 @Input({ required: true })
 products!: Product[];

 @Output()
  cars = new EventEmitter<Product>();

 @Output()
 view = new EventEmitter<Product>();
}

