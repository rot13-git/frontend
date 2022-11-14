import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoLibroDialogComponent } from './nuovo-libro-dialog.component';

describe('NuovoLibroDialogComponent', () => {
  let component: NuovoLibroDialogComponent;
  let fixture: ComponentFixture<NuovoLibroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoLibroDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoLibroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
