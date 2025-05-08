import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTemplateComponent } from './row-template.component';

describe('RowTemplateComponent', () => {
  let component: RowTemplateComponent;
  let fixture: ComponentFixture<RowTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
