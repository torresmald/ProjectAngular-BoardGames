import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygamedetailComponent } from './mygamedetail.component';

describe('MygamedetailComponent', () => {
  let component: MygamedetailComponent;
  let fixture: ComponentFixture<MygamedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygamedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MygamedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
