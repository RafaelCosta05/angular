import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  httpClient = inject(HttpClient);
  data: any[] = []

  apiUrl = 'http://127.0.0.1:8000/api/roles'

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
    .get(this.apiUrl)
    .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
