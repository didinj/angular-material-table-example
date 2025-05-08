import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledTableComponent } from './styled-table.component';

describe('StyledTableComponent', () => {
  let component: StyledTableComponent;
  let fixture: ComponentFixture<StyledTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
