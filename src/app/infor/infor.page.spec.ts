import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InforPage } from './infor.page';

describe('InforPage', () => {
  let component: InforPage;
  let fixture: ComponentFixture<InforPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
