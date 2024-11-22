import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompaniesService } from '../../../../services/companies.service';

import { CardTableComponent } from '../../utilities/card-table/card-table.component';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { error } from 'console';

@Component({
  selector: 'create-company',
  standalone: true,
  imports: [
    CommonModule,
    TitlePageComponent,
    CardTableComponent,
    DashboardComponent
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent {
  @ViewChild(ModalComponent) modalComponent: ModalComponent | undefined;

  companyObj: {
    name: ''
    email: ''
    contact: 0,
    nif: 0,
    newsletter: boolean
  }

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private dashboardComponent: DashboardComponent,
  ) {}

  create() {
    this.companiesService.create(this.companyObj).subscribe({
      next: (res: any) => {
        if(res.status === 'success') {
          this.dashboardComponent.showModal(
            'Message',
            data.message
          );
        }
      },
      error: (err) => {
        const errorMessage = err.error?.message;
        this.modalComponent?.showModal(
          'Error',
          errorMessage
        );
      }
    })
  }

}
