import { Routes } from '@angular/router';
import { ErrorPage } from '@core/components';
import { AppRoutes } from '@core/constants/enums'

export const APP_ROUTES: Routes = [
    {
        path: AppRoutes.Home,
        loadComponent: () =>
          import('./modules/dashboard').then(
            m => m.Dashboard
          ),
    },
    {
    path: AppRoutes.NewsItem,
        loadComponent: () =>
          import('./modules/news-item').then(
            m => m.NewsItem
          ),
    },
    { path: AppRoutes.NotFound, pathMatch: 'full', component: ErrorPage },
    { path: '**', pathMatch: 'full', redirectTo: AppRoutes.NotFound},
    
];
