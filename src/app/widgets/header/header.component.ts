import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  menuItems = [
    {
      name: 'Shop',
      link: 'shop',
    },
    {
      name: 'Product',
      link: 'product',
    },
    {
      name: 'Auth',
      link: 'auth',
    },
    {
      name: 'Admin',
      link: 'admin',
    },
    {
      name: 'Basket',
      link: 'basket',
    },
  ];
}
