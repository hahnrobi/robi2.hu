import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasznosPageComponent } from './hasznos-page.component';

describe('HasznosPageComponent', () => {
  let component: HasznosPageComponent;
  let fixture: ComponentFixture<HasznosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasznosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasznosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
