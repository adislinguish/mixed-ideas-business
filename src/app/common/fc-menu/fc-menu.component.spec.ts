import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcMenuComponent } from './fc-menu.component';

describe('FcMenuComponent', () => {
  let component: FcMenuComponent;
  let fixture: ComponentFixture<FcMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
