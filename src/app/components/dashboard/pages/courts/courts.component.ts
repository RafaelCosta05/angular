import { CourtsService } from './../../../../services/courts.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component, ViewChild } from '@angular/core';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';
import { CardTableComponent } from '../../utilities/card-table/card-table.component';
import { ModalComponent } from '../../../utilities/modal/modal.component';

@Component({
  selector: 'courts',
  standalone: true,
  imports: [
    CommonModule,
    TitlePageComponent,
    CardTableComponent,
    ModalComponent
  ],
  templateUrl: './courts.component.html',
  styleUrl: './courts.component.css'
})
export class CourtsComponent {
  @ViewChild(ModalComponent) modalComponent: ModalComponent | undefined;

  courts: any[] = [];

    constructor(
      private router: Router,
      private courtsService: CourtsService,
    ) {}

    ngOnInit(): void {
      this.loadCourts();
    }

    loadCourts(): void {
      this.courtsService.index().subscribe({
        next: (data: any) => {
          this.courts = data;
        },
        error: (err: any) => {
          alert('erro' + err.message)
          this.modalComponent?.showModal(
            'Error',
            'Erro ao tentar carregar a lista de campos'
          );
        }
      })
    }
}
