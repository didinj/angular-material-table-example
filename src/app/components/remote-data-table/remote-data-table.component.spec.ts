import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDataTableComponent } from './remote-data-table.component';

describe('RemoteDataTableComponent', () => {
  let component: RemoteDataTableComponent;
  let fixture: ComponentFixture<RemoteDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
