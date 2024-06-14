import { ProductService } from './../services/product.service';
import { routes } from './../app.routes';
import { Component, OnInit, inject } from '@angular/core';
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
export class ProductPageComponent implements OnInit{

router = inject(Router);

private productService!: ProductService;

products!: Product[];

ngOnInit(): void {
  this.productService = new ProductService();
  this.products = this.productService.getList();
}

onCars(product:Product): void{
  this.router.navigate(['product','car']);
}
onView(product:Product): void{
this.router.navigate(['product','view']);
}
}
