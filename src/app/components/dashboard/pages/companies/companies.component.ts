import { Component } from '@angular/core';

import { CardTableComponent } from '../../utilities/card-table/card-table.component';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    TitlePageComponent,
    CardTableComponent,
    DashboardComponent
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {

}
