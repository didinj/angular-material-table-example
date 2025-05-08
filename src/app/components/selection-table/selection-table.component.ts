import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { Player } from '../../player';

@Component({
  selector: 'app-selection-table',
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './selection-table.component.html',
  styleUrl: './selection-table.component.scss'
})
export class SelectionTableComponent {
  displayedColumns: string[] = ['select', 'name', 'team'];
  dataSource = new MatTableDataSource(Player);
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
