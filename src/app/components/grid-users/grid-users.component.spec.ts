import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUsersComponent } from './grid-users.component';

describe('GridUsersComponent', () => {
  let component: GridUsersComponent;
  let fixture: ComponentFixture<GridUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridUsersComponent]
    });
    fixture = TestBed.createComponent(GridUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
