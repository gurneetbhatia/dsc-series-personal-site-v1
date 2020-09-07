import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Experience } from 'src/assets/dtos/experience.dto';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private experiencesDoc: AngularFirestoreCollection<Experience>;
  private experiences: Observable<Experience[]>

  constructor(private firestore: AngularFirestore) {
    this.experiencesDoc = firestore.collection<Experience>('experiences');
    this.experiences = this.experiencesDoc.valueChanges();
  }

  getExperiences() {
    return this.experiences;
  }
}
