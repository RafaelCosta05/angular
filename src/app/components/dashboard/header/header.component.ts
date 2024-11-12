import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DatePipe]  // Fornecendo o DatePipe diretamente no componente
})
export class HeaderComponent {
  date: string;
  hour: string;

  constructor(private datePipe: DatePipe) {
    const currentDate = new Date();

    // Formatar a data para o formato "23 de Abril"
    this.date = this.datePipe.transform(currentDate, 'd \'de\' MMMM', 'pt-BR')!;

    // Formatar a hora para o formato "21:13"
    this.hour = this.datePipe.transform(currentDate, 'HH:mm')!;
  }
}
