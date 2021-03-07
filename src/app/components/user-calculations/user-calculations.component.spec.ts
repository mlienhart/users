import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalculationsComponent } from './user-calculations.component';

describe('UserCalculationsComponent', () => {
  let component: UserCalculationsComponent;
  let fixture: ComponentFixture<UserCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCalculationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
