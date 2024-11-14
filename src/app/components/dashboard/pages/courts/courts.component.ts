import { Component } from '@angular/core';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';

@Component({
  selector: 'courts',
  standalone: true,
  imports: [
    TitlePageComponent
  ],
  templateUrl: './courts.component.html',
  styleUrl: './courts.component.css'
})
export class CourtsComponent {

}
