import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path: 'home',
        loadComponent: ()=>import('@org/page-home').then((c)=> c.PageHomeComponent),        
    },
    {
        path: 'users',
        loadComponent: ()=>import('@org/page-users').then((c)=> c.PageUsersComponent),        
    },
    {
        path: 'products',
        loadComponent: ()=>import('@org/page-products').then((c)=> c.PageProductsComponent),        
    }
];
