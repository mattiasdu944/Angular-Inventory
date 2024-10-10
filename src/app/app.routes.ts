import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: 'admin',
        // loadChildren: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        component: AdminLayoutComponent,
        children: [
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
            }
        ]
    },
];
