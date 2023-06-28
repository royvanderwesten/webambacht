import {Component, Input, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'ba-page-builder-view',
  templateUrl: './page-builder-view.component.html',
  styleUrls: ['./page-builder-view.component.scss']
})
export class PageBuilderViewComponent implements OnInit {
  // @ts-ignore
  public page$: Observable<any>;

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
  }

  addContent(e: any) {
    this.firestoreService.addContentType(this.user, this.params.pageId, e).then(() => {
      alert('content added!');
    }).catch(() => {
      alert('something went wrong');
    });
  }
}
