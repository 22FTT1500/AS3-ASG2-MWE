import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBinPage } from './add-bin.page';

describe('AddBinPage', () => {
  let component: AddBinPage;
  let fixture: ComponentFixture<AddBinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
