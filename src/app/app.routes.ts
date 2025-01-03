import { Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ProductItemComponent } from './widgets/product-item/product-item.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'registration', component: AuthPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'basket', component: BasketPageComponent },
];
