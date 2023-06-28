import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContentTypeHeader} from "../../modals/content-type-header";
import {ContentType} from "../../modals/content-type";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Observable} from "rxjs";

@Component({
  selector: 'ba-page-builder-configurator',
  templateUrl: './page-builder-configurator.component.html',
  styleUrls: ['./page-builder-configurator.component.scss']
})

export class PageBuilderConfiguratorComponent implements OnInit {
  @Input() page: any;
  @Input() pages: any;
  @Output() createContent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateContent: EventEmitter<any> = new EventEmitter<any>();

  public contentBlocks: any;
  public showCreateContent: boolean;
  public createContentForm: FormGroup;

  public contentTypes: ContentType[];


  constructor(private fb: FormBuilder) {
    const header: ContentTypeHeader = {
      type: 'header',
      id: '',
      name: 'Header'
    }

    const requestQuote = {
      type: 'webform',
      id: '',
      name: 'Formulier'
    }

    const articleCarousel = {
      type: 'articleCarousel',
      id: '',
      name: 'Artikel carousel'
    }

    this.contentTypes = [header, requestQuote, articleCarousel];

    this.showCreateContent = false;
    this.createContentForm = this.fb.group({
      contentType: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  submitContent(form: any) {
    this.createContent.emit({
      contentType :form.value.contentType,
      description: form.value.description,
      title: form.value.title
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.page, event.previousIndex, event.currentIndex);
    this.saveContentOrder(event.container.data);
  }

  saveContentOrder(contentBlocks: any[]) {
    const newObjects: any = [];
    contentBlocks.forEach((block, i) => {
      newObjects.push({...block, index: i});
    })

    this.updateContent.emit(newObjects);
  }
}
