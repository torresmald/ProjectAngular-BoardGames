import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMyBoardGameComponent } from './form-my-board-game.component';

describe('FormMyBoardGameComponent', () => {
  let component: FormMyBoardGameComponent;
  let fixture: ComponentFixture<FormMyBoardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMyBoardGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMyBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
