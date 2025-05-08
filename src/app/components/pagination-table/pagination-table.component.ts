import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Player } from '../../player';

@Component({
  selector: 'app-pagination-table',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './pagination-table.component.html',
  styleUrl: './pagination-table.component.scss'
})
export class PaginationTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'team'];
  dataSource = new MatTableDataSource(Player);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
