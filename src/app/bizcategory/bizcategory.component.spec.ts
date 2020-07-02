import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizcategoryComponent } from './bizcategory.component';

describe('BizcategoryComponent', () => {
  let component: BizcategoryComponent;
  let fixture: ComponentFixture<BizcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
