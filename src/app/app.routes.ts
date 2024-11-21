import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CourtsPageComponent } from './components/pages/courts-page/courts-page.component';

import { LoginComponent } from './components/login/login.component';

import { authGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MainComponent } from './components/dashboard/pages/main/main.component';
import { ReservationsComponent } from './components/dashboard/pages/reservations/reservations.component';
import { CompaniesComponent } from './components/dashboard/pages/companies/companies.component';
import { CourtsComponent } from './components/dashboard/pages/courts/courts.component';
import { PromotionsComponent } from './components/dashboard/pages/promotions/promotions.component';
import { StatisticsComponent } from './components/dashboard/pages/statistics/statistics.component';
import { CustomersComponent } from './components/dashboard/pages/customers/customers.component';
import { SettingsComponent } from './components/dashboard/pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'PadelConnect'
  },
  {
    path: 'courts',
    component: CourtsPageComponent,
    title: 'Campos'
  },
  {
    path: 'about-us',
    component: AboutPageComponent,
    title: 'Sobre nós'
  },
  {
    path: 'contact-us',
    component: ContactPageComponent,
    title: 'Contactos'
  },
  { path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      { path: 'main', component: MainComponent },
      { path: 'reservations', component: ReservationsComponent, title: 'Dashboard - Reservas' },
      { path: 'companies', component: CompaniesComponent, title: 'Dashboard - Empresas' },
      { path: 'courts', component: CourtsComponent, title: 'Dashboard - Campos' },
      { path: 'promotions', component: PromotionsComponent, title: 'Dashboard - Promoções' },
      { path: 'statistics', component: StatisticsComponent, title: 'Dashboard - Estatísticas' },
      { path: 'customers', component: CustomersComponent, title: 'Dashboard - Clientes' },
      { path: 'settings', component: SettingsComponent, title: 'Dashboard - Definições' },

      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ]
  },
  { path: 'unauthorized',
    component: UnauthorizedComponent,
    title: '401 - unauthorized'
  },
  {
    path: 'error-page',
    component: ErrorPageComponent,
    title: 'Error'
  }
];
