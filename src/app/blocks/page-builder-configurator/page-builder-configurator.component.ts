import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges,
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {PageBuilderService} from "../../services/page-builder/page-builder.service";

@Component({
  selector: 'ba-page-builder-configurator',
  templateUrl: './page-builder-configurator.component.html',
  styleUrls: ['./page-builder-configurator.component.scss']
})

export class PageBuilderConfiguratorComponent implements OnInit, OnChanges {
  @Input() page: any;
  @Input() pages: any;
  @Output() createContent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteContent: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateContent: EventEmitter<any> = new EventEmitter<any>();

  public navItems: any;
  public contentBlocks: any;
  public showCreateContent: boolean = false;
  public newContentIndex: number = 0;

  constructor(private _pageBuilderService: PageBuilderService) {}

  ngOnInit(): void {
    console.log('HI');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pages']) {
      this.navItems = this._pageBuilderService.createNavArray(this.pages);
    }
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
