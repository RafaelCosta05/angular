import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router  } from '@angular/router';
import { NavbarComponent } from './components/master/navbar/navbar.component';
import { FooterComponent } from './components/master/footer/footer.component';
import { RolesComponent } from './components/roles/roles.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    RolesComponent,
    LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'Angular';

  showHeaderFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ouve mudanças de rota para verificar se estamos na rota de login
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = event.url !== '/login';
      }
    });
  }
}
