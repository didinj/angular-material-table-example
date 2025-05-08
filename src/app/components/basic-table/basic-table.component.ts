import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Player } from '../../player';

@Component({
    selector: 'app-basic-table',
    imports: [MatTableModule],
    templateUrl: './basic-table.component.html',
    styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {
  displayedColumns: string[] = ['name', 'team'];
  dataSource = Player;
}
