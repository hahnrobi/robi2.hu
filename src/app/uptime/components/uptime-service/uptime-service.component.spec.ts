import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeServiceComponent } from './uptime-service.component';

describe('UptimeServiceComponent', () => {
  let component: UptimeServiceComponent;
  let fixture: ComponentFixture<UptimeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptimeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptimeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
