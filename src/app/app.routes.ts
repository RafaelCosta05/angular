import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';

import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MainComponent } from './components/dashboard/pages/main/main.component';
import { ReservationsComponent } from './components/dashboard/pages/reservations/reservations.component';
import { CourtsComponent } from './components/dashboard/pages/courts/courts.component';
import { PromotionsComponent } from './components/dashboard/pages/promotions/promotions.component';
import { StatisticsComponent } from './components/dashboard/pages/statistics/statistics.component';
import { CustomersComponent } from './components/dashboard/pages/customers/customers.component';
import { SettingsComponent } from './components/dashboard/pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home'
  },
  {
    path: 'about-us',
    component: AboutPageComponent,
    title: 'About'
  },
  {
    path: 'contact-us',
    component: ContactPageComponent,
    title: 'About'
  },
  { path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      { path: 'main', component: MainComponent },
      { path: 'reservations', component: ReservationsComponent, title: 'Dashboard - Reservas' },
      { path: 'courts', component: CourtsComponent, title: 'Dashboard - Campos' },
      { path: 'promotions', component: PromotionsComponent, title: 'Dashboard - Promoções' },
      { path: 'statistics', component: StatisticsComponent, title: 'Dashboard - Estatísticas' },
      { path: 'customers', component: CustomersComponent, title: 'Dashboard - Clientes' },
      { path: 'settings', component: SettingsComponent, title: 'Dashboard - Definições' },

      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ]
  },
];
