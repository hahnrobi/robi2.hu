import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasznosFileListItemComponent } from './hasznos-file-list-item.component';

describe('HasznosFileListItemComponent', () => {
  let component: HasznosFileListItemComponent;
  let fixture: ComponentFixture<HasznosFileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasznosFileListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasznosFileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
