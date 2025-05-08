import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-remote-data-table',
  imports: [MatTableModule],
  templateUrl: './remote-data-table.component.html',
  styleUrl: './remote-data-table.component.scss'
})
export class RemoteDataTableComponent {
  displayedColumns: string[] = ['name', 'team'];
  dataSource: any[] = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/players')
      .subscribe(data => {
        this.dataSource = data;
      });
  }
}
