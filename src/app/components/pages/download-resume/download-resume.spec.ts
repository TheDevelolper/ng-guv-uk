import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadResume } from './download-resume';

describe('DownloadResume', () => {
  let component: DownloadResume;
  let fixture: ComponentFixture<DownloadResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
