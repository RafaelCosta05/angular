import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {

}
