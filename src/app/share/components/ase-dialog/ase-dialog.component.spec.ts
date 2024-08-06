import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseDialogComponent } from './ase-dialog.component';

describe('AseDialogComponent', () => {
  let component: AseDialogComponent;
  let fixture: ComponentFixture<AseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AseDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
