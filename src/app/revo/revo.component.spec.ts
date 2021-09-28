import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevoComponent } from './revo.component';

describe('RevoComponent', () => {
  let component: RevoComponent;
  let fixture: ComponentFixture<RevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
