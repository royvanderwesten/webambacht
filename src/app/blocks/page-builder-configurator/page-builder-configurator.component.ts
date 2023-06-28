import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContentTypeHeader} from "../../modals/content-type-header";
import {ContentType} from "../../modals/content-type";

@Component({
  selector: 'ba-page-builder-configurator',
  templateUrl: './page-builder-configurator.component.html',
  styleUrls: ['./page-builder-configurator.component.scss']
})

export class PageBuilderConfiguratorComponent implements OnInit, OnChanges {
  @Input() page: any;
  @Output() createContent: EventEmitter<any> = new EventEmitter<any>();

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
    })
  }

  ngOnInit(): void {
  }

  submitContent(form: any) {
    this.createContent.emit({
      contentType :form.value.contentType,
      description: form.value.description,
      title: form.value.title
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
