import { Component } from '@angular/core';
import { ProductsComponent } from '../../widgets/products/products.component';

@Component({
  selector: 'app-shop-page',
  imports: [ProductsComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
})
export class ShopPageComponent {}
