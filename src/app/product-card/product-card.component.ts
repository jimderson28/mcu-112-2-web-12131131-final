import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input() authors!: string[];
  @Input() company!: string;
  @Input() imgUrl!: string ;
  @Input({ transform: numberAttribute }) price!: number;
  @HostBinding('class')
  class='product-card';
  @Output() cars = new EventEmitter<void>();
  @Output() view = new EventEmitter<void>();
}
