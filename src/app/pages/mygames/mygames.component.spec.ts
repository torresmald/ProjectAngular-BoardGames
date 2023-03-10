import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygamesComponent } from './mygames.component';

describe('MygamesComponent', () => {
  let component: MygamesComponent;
  let fixture: ComponentFixture<MygamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MygamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
