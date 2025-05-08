import { Component } from '@angular/core';
import { Player } from '../../player';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-row-template',
  imports: [CommonModule, MatTableModule],
  templateUrl: './row-template.component.html',
  styleUrl: './row-template.component.scss'
})
export class RowTemplateComponent {
  displayedColumns: string[] = ['photo', 'name', 'team'];
  dataSource = Player;
}
