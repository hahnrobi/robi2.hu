import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordWidgetPageComponent } from './discord-widget-page.component';

describe('DiscordWidgetPageComponent', () => {
  let component: DiscordWidgetPageComponent;
  let fixture: ComponentFixture<DiscordWidgetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordWidgetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordWidgetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
