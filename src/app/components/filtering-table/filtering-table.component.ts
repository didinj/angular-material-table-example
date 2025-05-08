import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Player } from '../../player';

@Component({
  selector: 'app-filtering-table',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './filtering-table.component.html',
  styleUrl: './filtering-table.component.scss'
})
export class FilteringTableComponent {
  displayedColumns: string[] = ['name', 'team'];
  dataSource = new MatTableDataSource(Player);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
