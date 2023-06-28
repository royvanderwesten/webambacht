import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuilderViewComponent } from './page-builder-view.component';

describe('PageBuilderViewComponent', () => {
  let component: PageBuilderViewComponent;
  let fixture: ComponentFixture<PageBuilderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBuilderViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBuilderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
