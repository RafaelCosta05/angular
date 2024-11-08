import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home'},
  { path: 'about-us', component: AboutPageComponent, title: 'About'},
  { path: 'contact-us', component: ContactPageComponent, title: 'About'},
  { path: 'login', component: LoginComponent, title: 'Login'},

];
