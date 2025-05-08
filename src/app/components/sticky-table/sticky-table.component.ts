import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Player } from '../../player';

@Component({
  selector: 'app-sticky-table',
  imports: [MatTableModule],
  templateUrl: './sticky-table.component.html',
  styleUrl: './sticky-table.component.scss'
})
export class StickyTableComponent {
  displayedColumns: string[] = ['id', 'name', 'team'];
  dataSource = Player;
}
