import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ContentType} from "../../modals/content-type";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private store: Store<any>,
    private db: AngularFirestore) {
  }

  getPages(uid: string) {
    return this.db.collection('users').doc(uid).collection('pages').valueChanges();
  }

  getPage(uid: string, pageId: string): Observable<any> {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('pages')
      .doc(pageId)
      .collection('content', ref => ref.orderBy('index', 'asc'))
      .valueChanges(); // Use valueChanges() instead of get()
  }

  createPage(name: string, url: string): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.store.select('user').subscribe(user => {
        this.db.collection('users')
          .doc(user.uid)
          .collection('pages')
          .doc(url)
          .set({page: name, url: url})
          .then(() => {
            resolve();
          }).catch(() => {
          reject();
        });
      });
    })
  }

  addContentType(user: any, url: string, contentType: ContentType): Promise<any> {
    const uuId = uuidv4();

    return new Promise<void>((resolve, reject) => {
      const dbPageContentPath = this.db.collection('users')
        .doc(user.uid)
        .collection('pages')
        .doc(url)
        .collection('content')
        .doc(uuId)
        .set({...contentType, id: uuId});

        dbPageContentPath.then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
    });
  }

  updateContentType(user: any, url: string, contentType: ContentType) {
    return new Promise<void>((resolve, reject) => {
      const dbPageContentPath = this.db.collection('users')
        .doc(user.uid)
        .collection('pages')
        .doc(url)
        .collection('content')
        .doc(contentType.id)
        .update(contentType);

      dbPageContentPath.then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  }
}
