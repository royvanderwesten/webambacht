import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { forkJoin, lastValueFrom } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { PageBuilderService } from 'src/app/services/page-builder/page-builder.service';

@Component({
  selector: 'ba-navigation-tree-editor',
  templateUrl: './navigation-tree-editor.component.html',
  styleUrls: ['./navigation-tree-editor.component.scss']
})
export class NavigationTreeEditorComponent implements OnInit, OnChanges {
  @Input() pages: any[] = [];
  public pageArr: any[] = [];
  public mainPageDrag: boolean = false;

  constructor(private _pageBuilderService: PageBuilderService,
              private _firestoreService: FirestoreService) { }

  ngOnInit(): void {
 
  }

  drop(e: any, targetPage: any) {
    const subPage = e.item.data;
    this._firestoreService.updateNavigationTree(subPage, targetPage).catch(() => {
      alert('Oops, something went wrong');
    });
  }

  changePageOrder(event: any) {
    moveItemInArray(this.pageArr, event.previousIndex, event.currentIndex);
    this.savePageOrder(this.pageArr);
  }

  savePageOrder(pageArr: any[]) {
    const newObjects: any = [];
    pageArr.forEach((page, i) => {
      newObjects.push({...page, index: i});
    })

    const observables: any = [];
    newObjects.forEach((page: any) => {
      observables.push(this._firestoreService.updatePageOrder(page));
    });

    lastValueFrom(forkJoin(observables)).catch(() => {
      alert('something went wrong');
    });
  }

  ngOnChanges(): void {
       // Create an array with all the nested arrays
       this.pageArr = this._pageBuilderService.createNavArray(this.pages);
  }

}
