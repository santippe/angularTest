import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoboardComponent } from './dashoboard.component';

describe('DashoboardComponent', () => {
  let component: DashoboardComponent;
  let fixture: ComponentFixture<DashoboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashoboardComponent]
    });
    fixture = TestBed.createComponent(DashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
