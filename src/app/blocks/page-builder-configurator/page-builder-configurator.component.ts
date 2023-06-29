import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContentType} from "../../modals/content-type";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {contentTypes} from "../../content-types";

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
  public showCreateContent: boolean = false;

  constructor() {}

  ngOnInit(): void {
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
