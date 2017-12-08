import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBuildComponent } from './liste-build.component';

describe('ListeBuildComponent', () => {
  let component: ListeBuildComponent;
  let fixture: ComponentFixture<ListeBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
