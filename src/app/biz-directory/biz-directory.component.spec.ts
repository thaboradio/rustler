import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizDirectoryComponent } from './biz-directory.component';

describe('BizDirectoryComponent', () => {
  let component: BizDirectoryComponent;
  let fixture: ComponentFixture<BizDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
