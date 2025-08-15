import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitarieComponent } from './solitarie.component';

describe('SolitarieComponent', () => {
  let component: SolitarieComponent;
  let fixture: ComponentFixture<SolitarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolitarieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolitarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
