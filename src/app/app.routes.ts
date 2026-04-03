import { Routes } from '@angular/router';
import { HomeLandingComponent } from './pages/home-landing/home-landing.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeLandingComponent
    },
    {
        path: 'menu',
        loadComponent: () =>
            import('./pages/menu-landing/menu-landing.component').then(
                (m) => m.MenuLandingComponent
            )
    },
    {
        path: 'shopping-cart-landing',
        loadComponent: () =>
            import('./pages/shopping-cart-landing/shopping-cart-landing.component').then(
                (m) => m.ShoppingCartLandingComponent
            )
    },
    {
        path: 'login-landing',
        loadComponent: () =>
            import('./pages/login-landing/login-landing.component').then(
                (m) => m.LoginLandingComponent
            )
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./sections/login-section/newAccount/newAccount').then(
                (m) => m.NewAccount
            )
    }

];
