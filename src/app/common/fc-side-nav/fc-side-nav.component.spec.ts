import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcSideNavComponent } from './fc-side-nav.component';

describe('FcSideNavComponent', () => {
  let component: FcSideNavComponent;
  let fixture: ComponentFixture<FcSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
