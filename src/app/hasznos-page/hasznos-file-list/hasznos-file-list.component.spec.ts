import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasznosFileListComponent } from './hasznos-file-list.component';

describe('HasznosFileListComponent', () => {
  let component: HasznosFileListComponent;
  let fixture: ComponentFixture<HasznosFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasznosFileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasznosFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
