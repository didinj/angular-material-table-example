import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Player } from '../../player';

@Component({
  selector: 'app-styled-table',
  imports: [MatTableModule],
  templateUrl: './styled-table.component.html',
  styleUrl: './styled-table.component.scss'
})
export class StyledTableComponent {
  displayedColumns: string[] = ['photo', 'name', 'team'];
  dataSource = Player;
}
