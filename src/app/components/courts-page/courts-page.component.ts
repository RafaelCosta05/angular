import { Component } from '@angular/core';
import { PageTopComponent } from '../page-top/page-top.component';

@Component({
  selector: 'app-courts-page',
  standalone: true,
  imports: [
    PageTopComponent
  ],
  templateUrl: './courts-page.component.html',
  styleUrl: './courts-page.component.css'
})
export class CourtsPageComponent {

}
