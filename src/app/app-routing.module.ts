import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  {
    path: 'dashboard', component: MainLayoutComponent,
    children: [{ path: '', component: DashboardComponent }]
  },
  {
    path: 'category', component: MainLayoutComponent,
    children: [{ path: '', component: CategoryComponent }]
  },

  {
    path: 'categoryadd', component: MainLayoutComponent,
    children: [{ path: '', component: CategoryAddComponent }]
  },

  {
    path: 'menu', component: MainLayoutComponent,
    children: [{ path: '', component: MenuComponent }]
  },

  {
    path: 'menuadd', component: MainLayoutComponent,
    children: [{ path: '', component: MenuAddComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
