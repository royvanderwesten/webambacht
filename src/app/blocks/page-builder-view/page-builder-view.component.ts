import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {forkJoin, lastValueFrom, Observable} from "rxjs";
import {ContentType} from "../../modals/content-type";

@Component({
  selector: 'ba-page-builder-view',
  templateUrl: './page-builder-view.component.html',
  styleUrls: ['./page-builder-view.component.scss']
})
export class PageBuilderViewComponent implements OnInit {
  public page$: Observable<any> | undefined;
  public pages$: Observable<any> | undefined;

  public page: any;
  private user: any;
  private params: any;

  constructor(private _store: Store<any>,
              private route: ActivatedRoute,
              private firestoreService: FirestoreService) {
    this.route.params.subscribe((params: any) => {
      this.params = params;

      this._store.select('user').subscribe(user => {
        this.user = user;
        this.initPage(user, params);
      });
    })
  }

  ngOnInit() {}

  initPage(user: any, params: any) {
    this.page$ = this.firestoreService.getPage(user.uid, params.pageId);
    this.pages$ = this.firestoreService.getPages(user.uid);
  }

  addContent(e: any) {
    this.firestoreService.addContentType(this.user, this.params.pageId, e).catch(() => {
      alert('something went wrong');
    });
  }

  deleteContent(contentId: string) {
    this.firestoreService.deleteContentType(this.user, this.params.pageId, contentId).catch(() => {
      alert('something went wrong');
    });
  }

  updateContent(contentBlocks: any) {
    const observables: any = [];
    contentBlocks.forEach((block: ContentType) => {
      observables.push(this.firestoreService.updateContentType(this.user, this.params.pageId, block));
    });

    lastValueFrom(forkJoin(observables)).catch(() => {
      alert('something went wrong');
    });
  }
}
