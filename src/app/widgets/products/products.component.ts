import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
