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
    }
];
