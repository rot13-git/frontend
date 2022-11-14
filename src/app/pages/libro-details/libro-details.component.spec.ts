import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetailsComponent } from './libro-details.component';

describe('LibroDetailsComponent', () => {
  let component: LibroDetailsComponent;
  let fixture: ComponentFixture<LibroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
