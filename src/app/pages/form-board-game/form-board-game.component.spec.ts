import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBoardGameComponent } from './form-board-game.component';

describe('FormBoardGameComponent', () => {
  let component: FormBoardGameComponent;
  let fixture: ComponentFixture<FormBoardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBoardGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
