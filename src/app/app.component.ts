import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
