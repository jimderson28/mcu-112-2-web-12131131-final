import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
product =
new Product({
name : "A 產品",
authors : ['作者A','作者B','作者C'],
company : "博碩文化",
imgUrl : "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
price : 158000,
})

private router = inject (Router);

onCars(): void{
  this.router.navigate(['product','car']);
}

onBack(): void {
  this.router.navigate(['products']);
}

}
