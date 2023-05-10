import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataSignalComponent } from './add-data-signal.component';

describe('AddDataSignalComponent', () => {
  let component: AddDataSignalComponent;
  let fixture: ComponentFixture<AddDataSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataSignalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
