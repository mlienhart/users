import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedInfoComponent } from './advanced-info.component';

describe('AdvancedInfoComponent', () => {
  let component: AdvancedInfoComponent;
  let fixture: ComponentFixture<AdvancedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
