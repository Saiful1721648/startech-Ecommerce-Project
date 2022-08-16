import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepagecheckoutComponent } from './onepagecheckout.component';

describe('OnepagecheckoutComponent', () => {
  let component: OnepagecheckoutComponent;
  let fixture: ComponentFixture<OnepagecheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnepagecheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnepagecheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
