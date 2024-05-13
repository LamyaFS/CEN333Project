import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}
  loginWithEmail(Details: { email: any; password: any; }) {
    return this.auth.signInWithEmailAndPassword(Details.email, Details.password);
  }

  signup(Details) {
    return this.auth.createUserWithEmailAndPassword(Details.email, Details.password);
  }

  saveDetails(Details) {
    return this.firestore.collection("users").doc(Details.uid).set(Details);
  }
  getDetails(Details) {
    return this.firestore.collection("users").doc(Details.uid).valueChanges();
  }
}