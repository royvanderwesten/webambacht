import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import {User} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Store} from "@ngrx/store";

import * as fromUserActions from '../../store/actions/user.actions';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'ba-default-nav',
  templateUrl: './default-nav.component.html',
  styles: []
})
export class DefaultNavComponent implements OnInit {
  @Input() pages: any[] = [];

  authState$: Observable<User | any>;
  authStateSubscription: Subscription;

  public userData$: Observable<any>;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private store: Store<any>) {
    this.userData$ = this.store.select('user')

    this.authState$ = afAuth.authState;
    this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
      // Handle auth state changes here. Note that the user will be null if there is no currently logged in user.
      this.store.dispatch(fromUserActions.setUser({email: aUser?.email, emailVerified: aUser?.emailVerified, uid: aUser?.uid}));
    });
  }

  ngOnInit(): void {
  }

}
