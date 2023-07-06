import {Component, Input, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ba-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss']
})
export class PageBuilderComponent implements OnInit {
  public pages: any;
  public showCreatePagePanel: boolean;

  constructor(private _store: Store<any>,
              private route: ActivatedRoute,
              private router: Router,
              private firestoreService: FirestoreService) {
    this.showCreatePagePanel = false;

    this.route.fragment.subscribe(fragment => {
      this.showCreatePagePanel = fragment === 'createPage';
    })
  }

  ngOnInit(): void {
    this._store.select('user').subscribe(user => {
      // Subscribe to all pages
      this.firestoreService.getPages(user.uid)
        .subscribe(res => {
            this.pages = res;
          }
        )
    });
  }

  closeCreatePagePanel() {
    this.router.navigate([]);
  }
}
