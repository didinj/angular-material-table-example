import { Routes } from '@angular/router';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { RemoteDataTableComponent } from './components/remote-data-table/remote-data-table.component';
import { RowTemplateComponent } from './components/row-template/row-template.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';
import { SortingTableComponent } from './components/sorting-table/sorting-table.component';
import { FilteringTableComponent } from './components/filtering-table/filtering-table.component';
import { SelectionTableComponent } from './components/selection-table/selection-table.component';
import { FooterTableComponent } from './components/footer-table/footer-table.component';
import { StickyTableComponent } from './components/sticky-table/sticky-table.component';
import { StyledTableComponent } from './components/styled-table/styled-table.component';

export const routes: Routes = [
    { path: 'basic-table', component: BasicTableComponent },
    { path: 'remote-data-table', component: RemoteDataTableComponent },
    { path: 'row-template', component: RowTemplateComponent },
    { path: 'pagination-table', component: PaginationTableComponent },
    { path: 'sorting-table', component: SortingTableComponent },
    { path: 'filtering-table', component: FilteringTableComponent },
    { path: 'selection-table', component: SelectionTableComponent },
    { path: 'footer-table', component: FooterTableComponent },
    { path: 'sticky-table', component: StickyTableComponent },
    { path: 'styled-table', component: StyledTableComponent },
];
