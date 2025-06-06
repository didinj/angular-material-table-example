import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTableComponent } from './pagination-table.component';

describe('PaginationTableComponent', () => {
  let component: PaginationTableComponent;
  let fixture: ComponentFixture<PaginationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
