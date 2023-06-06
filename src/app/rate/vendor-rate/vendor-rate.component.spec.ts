import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRateComponent } from './vendor-rate.component';

describe('VendorRateComponent', () => {
  let component: VendorRateComponent;
  let fixture: ComponentFixture<VendorRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorRateComponent]
    });
    fixture = TestBed.createComponent(VendorRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
