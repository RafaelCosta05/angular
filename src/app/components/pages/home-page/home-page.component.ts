import { Component } from '@angular/core';
import { MainContentComponent } from '../../utilities/main-content/main-content.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    MainContentComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
