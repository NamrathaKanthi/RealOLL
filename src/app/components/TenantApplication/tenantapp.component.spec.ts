import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantappComponent } from './tenantapp.component';

describe('TenantappComponent', () => {
  let component: TenantappComponent;
  let fixture: ComponentFixture<TenantappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
