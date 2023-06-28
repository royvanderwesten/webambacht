import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'ba-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

  public uid$: Observable<any>;

  constructor(private store: Store<any>) {
    this.uid$ = this.store.select('user', 'uid');
  }

  ngOnInit(): void {
  }

}
