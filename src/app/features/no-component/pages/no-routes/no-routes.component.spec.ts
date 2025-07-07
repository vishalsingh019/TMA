import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRoutesComponent } from './no-routes.component';

describe('NoRoutesComponent', () => {
  let component: NoRoutesComponent;
  let fixture: ComponentFixture<NoRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoRoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
