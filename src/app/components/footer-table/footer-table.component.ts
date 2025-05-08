import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Player } from '../../player';

@Component({
  selector: 'app-footer-table',
  imports: [MatTableModule],
  templateUrl: './footer-table.component.html',
  styleUrl: './footer-table.component.scss'
})
export class FooterTableComponent {
  displayedColumns: string[] = ['name', 'team'];
  dataSource = Player;

  get totalPlayers(): number {
    return this.dataSource.length;
  }

  get uniqueTeams(): number {
    const teams = this.dataSource.map(p => p.team);
    return new Set(teams).size;
  }
}
