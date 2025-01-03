import { Component } from '@angular/core';
import { ShopPageComponent } from '../shop-page/shop-page.component';

@Component({
  selector: 'app-home-page',
  imports: [ShopPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
