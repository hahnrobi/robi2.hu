import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeGroupComponent } from './uptime-group.component';

describe('UptimeGroupComponent', () => {
  let component: UptimeGroupComponent;
  let fixture: ComponentFixture<UptimeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptimeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptimeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
