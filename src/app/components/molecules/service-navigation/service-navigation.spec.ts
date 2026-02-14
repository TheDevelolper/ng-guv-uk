import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNavigation } from './service-navigation';

describe('ServiceNavigation', () => {
  let component: ServiceNavigation;
  let fixture: ComponentFixture<ServiceNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
