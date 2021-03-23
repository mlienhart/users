import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilterBarComponent } from './user-filter-bar.component';

describe('UserFilterBarComponent', () => {
  let component: UserFilterBarComponent;
  let fixture: ComponentFixture<UserFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFilterBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
