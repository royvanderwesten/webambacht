import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuilderConfiguratorComponent } from './page-builder-configurator.component';

describe('PageBuilderConfiguratorComponent', () => {
  let component: PageBuilderConfiguratorComponent;
  let fixture: ComponentFixture<PageBuilderConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBuilderConfiguratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBuilderConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
