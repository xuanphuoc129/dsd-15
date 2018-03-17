// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

import { AngularFirestore } from 'angularfire2/firestore';
import 'firebase/firestore';
import { FirebaseQuery, FirebaseOrder } from '../interfaces/firebase';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  db: firebase.firestore.Firestore;
  constructor() {
    // console.log('Hello FirebaseProvider Provider');
    this.db = firebase.firestore();
  }

  addDocument(collection: string, value: any, documentId?: string): Promise<any> {
    console.log("firebase add document", collection, documentId);
    // this.progressController.add();
    if (documentId) {
      value["firebase_id"] = documentId;
      value["id"] = documentId;
      return this.db.collection(collection).doc(documentId).set(value).then(success => {
        // this.progressController.subtract();
      }, error => {
        // this.progressController.subtract();
      })
    } else {
      let newRef = this.db.collection(collection).doc();
      value["firebase_id"] = newRef.id;
      value["id"] = newRef.id;
      return newRef.set(value).then(success => {
        // this.progressController.subtract();
        console.log("add data sucess");
        
      }, error => {
        // this.progressController.subtract();
        console.log("error");
        
      })
    }

  }

  getDocument(path: string): Promise<any> {
    console.log("firebase get document", path);
    // this.progressController.add();
    return new Promise((resolve, reject) => {
      this.db.doc(path).get().then(success => {
        console.log("get document succsess", success.data());
        if (success.exists) {
          let result = success.data();
          resolve(result);
        } else {
          reject("Bản ghi không tồn tại");
        }
        // this.progressController.subtract();
      }, error => {
        // this.progressController.subtract();
        console.log("get fail", error);
        reject(error);
      })
    })
  }

  updateDocument(path: string, data: any): Promise<any> {
    console.log("firebase update document", path);
    // this.progressController.add();
    return new Promise((resolve, reject) => {
      this.db.doc(path).update(data).then(success => {
        console.log("update succsess", success);
        resolve();
        // this.progressController.subtract();
      }, error => {
        // this.progressController.subtract();
        console.log("update fail", error);
        reject();
      })
    })
  }

  deleteDocument(path: string): Promise<any> {
    console.log("firebase delete document", path);
    // this.progressController.add();
    return new Promise((resolve, reject) => {
      this.db.doc(path).delete().then(success => {
        console.log("delete succsess", success);
        resolve();
        // this.progressController.subtract();
      }, error => {
        // this.progressController.subtract();
        console.log("delete fail", error);
        reject();
      })
    })
  }

  getCollection(path: string, queries?: Array<FirebaseQuery>, orders?: Array<FirebaseOrder>, limit?: number): Promise<any> {
    console.log("firebase get collection", path);
    // this.progressController.add();
    return new Promise((resolve, reject) => {
      let ref = this.db.collection(path) as firebase.firestore.Query;
      if (queries) {
        queries.forEach(query => {
          ref = ref.where(query.field, query.operator, query.value);
        });
      }
      if (orders) {
        orders.forEach(order => {
          ref = ref.orderBy(order.field, order.direction);
        });
      }
      if (limit) {
        ref = ref.limit(limit);
      }
      ref.get().then(querySnapshot => {
        console.log("firebase get collection success", querySnapshot);
        let result = [];
        querySnapshot.forEach(doc => {
          let element = doc.data();
          result.push(element);
        })
        // this.progressController.subtract();
        resolve(result);
      }, error => {
        // this.progressController.subtract();
        console.log("get collection fail", error);
        reject(error);
      })
    })
  }

  fetchCollection(path: string, queries?: Array<FirebaseQuery>, orders?: Array<FirebaseOrder>, limit?: number): Observable<any> {
    console.log("fetch data", path);
    return Observable.create(observer => {
      //Chú ý rằng trong query chỉ áp dụng range filter cho 1 field (<, >, <=, >=)
      //Nếu query có range filter thì orderBy đầu tiên phải order theo field của range filter đó
      let ref = this.db.collection(path) as firebase.firestore.Query;
      if (queries) {
        queries.forEach(query => {
          ref = ref.where(query.field, query.operator, query.value);
        });
      }
      if (orders) {
        orders.forEach(order => {
          ref = ref.orderBy(order.field, order.direction);
        });
      }
      if (limit) {
        ref = ref.limit(limit);
      }
      ref.onSnapshot(observer);
    });
  }

  loginWithAccountPassword(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout(){
    firebase.auth().signOut();
  }
}
