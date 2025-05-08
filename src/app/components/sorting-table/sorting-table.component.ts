import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Player } from '../../player';

@Component({
  selector: 'app-sorting-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './sorting-table.component.html',
  styleUrl: './sorting-table.component.scss'
})
export class SortingTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'team'];
  dataSource = new MatTableDataSource(Player);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}