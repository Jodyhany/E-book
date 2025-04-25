import { Routes } from '@angular/router';
import { setLayoutResolver } from './core/resolvers/set-layout.resolver';
import { PageLayout } from './core/enums/page-layout';

export const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',resolve:{layout:setLayoutResolver(PageLayout.Unauthorized)},loadChildren:()=>import('./features/auth/auth.module').then((m)=>m.AuthModule)},
    {path:'dashboard',resolve:{layout:setLayoutResolver(PageLayout.Authorized)},loadChildren:()=>import('./features/dashboard/dashboard.module').then((m)=>m.DashboardModule)},
    {path:'**',resolve:{layout:setLayoutResolver(PageLayout.Error)},loadComponent:()=>import('./features/shared/components/not-found/not-found.component').then((c)=>c.NotFoundComponent)}
];
