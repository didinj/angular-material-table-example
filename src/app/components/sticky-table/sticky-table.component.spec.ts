import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyTableComponent } from './sticky-table.component';

describe('StickyTableComponent', () => {
  let component: StickyTableComponent;
  let fixture: ComponentFixture<StickyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
