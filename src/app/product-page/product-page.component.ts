import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products = [
    new Product({
    name : "A 產品",
    authors : ['作者A','作者B','作者C'],
    company : "博碩文化",
    imgUrl : "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
    price : 158000,
    }),
    new Product({
    name : "B 產品",
    authors : ['作者A','作者B','作者C'],
    company : "博碩文化",
    imgUrl : "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
    price : 158000,
    }),
    new Product({
      name : "C 產品",
      authors : ['作者A','作者B','作者C'],
      company : "博碩文化",
      imgUrl : "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
      price : 158000,
      }),
      new Product({
        name : "D 產品",
        authors : ['作者A','作者B','作者C'],
        company : "博碩文化",
        imgUrl : "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
        price : 158000,
        })
];

router = inject(Router);
onView(product:Product): void{
this.router.navigate(['product']);
}
}
