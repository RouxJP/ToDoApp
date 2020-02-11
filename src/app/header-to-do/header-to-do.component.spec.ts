import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToDoComponent } from './header-to-do.component';

describe('HeaderToDoComponent', () => {
  let component: HeaderToDoComponent;
  let fixture: ComponentFixture<HeaderToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
