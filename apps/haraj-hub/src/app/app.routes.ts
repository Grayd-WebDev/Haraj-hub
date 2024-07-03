import { AuthGuard } from '@org/auth-guard';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"profile",
        canActivate: [AuthGuard],
        loadComponent: ()=>import('@org/page-profile').then((c)=>c.PageProfileComponent),
    },
    {
        path: 'home',
        loadComponent: ()=>import('@org/page-home').then((c)=> c.PageHomeComponent),        
    },
    {
        path:"auth",
        loadComponent: ()=>import('@org/page-auth').then((c)=>c.PageAuthComponent),
    },
    {
        path: 'users',
        loadComponent: ()=>import('@org/page-users').then((c)=> c.PageUsersComponent),        
    },
    {
        path: 'products/:id',
        loadComponent: ()=>import('@org/page-products').then((c)=> c.PageProductsComponent),        
    }
];
