import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SocioeducativoInterface } from '../../../models/socioeduc/socioeducativo';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiSocioeducativoService {

  constructor(private asf: AngularFirestore) { }
  private socioeducCollection: AngularFirestoreCollection<SocioeducativoInterface>;
  private socioeducs: Observable<SocioeducativoInterface[]>;
  private socioeducDoc: AngularFirestoreDocument<SocioeducativoInterface>;
  private socioeduc: Observable<SocioeducativoInterface>;
  public selectSocioeduc: SocioeducativoInterface = {
    seUid: null
  };

  getAllSocioeduc() {
    this.socioeducCollection = this.asf.collection<SocioeducativoInterface>('socioeducativo');
    return this.socioeducs = this.socioeducCollection.snapshotChanges()
      .pipe(map(change => {
        return change.map(action => {
          const data = action.payload.doc.data() as SocioeducativoInterface;
          data.seUid = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneSocioeduc(idSocioeduc: string) {
    this.socioeducDoc = this.asf.doc<SocioeducativoInterface>(`socioeducativo/${idSocioeduc}`);
    return this.socioeduc = this.socioeducDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as SocioeducativoInterface;
        data.seUid = action.payload.id;
        return data;
      }
    }));
  }

  addSocioeduc(socioeduc: SocioeducativoInterface): void {
    this.socioeducCollection.add(socioeduc);
  }

  updateSocioeduc(socioeduc: SocioeducativoInterface): void {
    let idSocioeduc = socioeduc.seUid;
    this.socioeducDoc = this.asf.doc<SocioeducativoInterface>(`socioeducativo/${idSocioeduc}`);
    this.socioeducDoc.update(socioeduc);
  }

  deleteSocioeduc(idSocioeduc: string): void {
    this.socioeducDoc = this.asf.doc<SocioeducativoInterface>(`socioeducativo/${idSocioeduc}`);
    this.socioeducDoc.delete();
  }
}
