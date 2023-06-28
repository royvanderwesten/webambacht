import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuilderNavComponent } from './page-builder-nav.component';

describe('PageBuilderNavComponent', () => {
  let component: PageBuilderNavComponent;
  let fixture: ComponentFixture<PageBuilderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBuilderNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBuilderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
