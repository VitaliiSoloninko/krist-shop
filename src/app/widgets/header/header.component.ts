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
      name: 'Home',
      link: '',
    },
    {
      name: 'Shop',
      link: 'shop',
    },
    {
      name: 'Login',
      link: 'login',
    },
    {
      name: 'Registration',
      link: 'registration',
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
