import { Routes } from '@angular/router';
import { AppRoutes } from '@core/constants/routes';

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
    {
    path: AppRoutes.Error,
        loadComponent: () =>
          import('./core/components/error-page/error-page').then(
            m => m.ErrorPage
          ),
    },
    /* { path: AppRoutes.NotFound, pathMatch: 'full', component: NotFoundPage }, */
    { path: '**', pathMatch: 'full', redirectTo: AppRoutes.NotFound},
    
];
