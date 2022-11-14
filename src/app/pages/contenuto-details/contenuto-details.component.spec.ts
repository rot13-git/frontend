import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenutoDetailsComponent } from './contenuto-details.component';

describe('ContenutoDetailsComponent', () => {
  let component: ContenutoDetailsComponent;
  let fixture: ComponentFixture<ContenutoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenutoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
