import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTreeEditorComponent } from './navigation-tree-editor.component';

describe('NavigationTreeEditorComponent', () => {
  let component: NavigationTreeEditorComponent;
  let fixture: ComponentFixture<NavigationTreeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTreeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTreeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
