import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SocioeducativoActualizacionesInterface } from '../../../models/socioeduc/socioeducativoactualizaciones';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiSocioeducativoActualizacionesService {

  constructor(private asf: AngularFirestore) { }
  private actualizacionCollection: AngularFirestoreCollection<SocioeducativoActualizacionesInterface>;
  private actualizaciones: Observable<SocioeducativoActualizacionesInterface[]>;
  private actualizacionDoc: AngularFirestoreDocument<SocioeducativoActualizacionesInterface>;
  private actualizacion: Observable<SocioeducativoActualizacionesInterface>;
  public selectedActualizacion: SocioeducativoActualizacionesInterface = {
      seUid: null
  }

  getAllActualizaciones(){
      this.actualizacionCollection = this.asf.collection<SocioeducativoActualizacionesInterface>('actualizacion');
      return this.actualizaciones = this.actualizacionCollection.snapshotChanges()
        .pipe(map(change => {
            return change.map(action => {
                const data = action.payload.doc.data() as SocioeducativoActualizacionesInterface;
                data.seUid = action.payload.doc.id;
                return data;
            })
        }))
  }

  getOneActualizacion(idSocioeduc: string) {
    this.actualizacionDoc = this.asf.doc<SocioeducativoActualizacionesInterface>(`socioeducativoactualizaciones/${idSocioeduc}`);
    return this.actualizacion = this.actualizacionDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as SocioeducativoActualizacionesInterface;
        data.seUid = action.payload.id;
        return data;
      }
    }));
  }

  addActualizacion(actualizacion: SocioeducativoActualizacionesInterface): void {
    this.actualizacionCollection.add(actualizacion);
  }

  updateActualizacion(actualizacion: SocioeducativoActualizacionesInterface): void {
    let idSocioeduc = actualizacion.seUid;
    this.actualizacionDoc = this.asf.doc<SocioeducativoActualizacionesInterface>(`socioeducativoactualizaciones/${idSocioeduc}`);
    this.actualizacionDoc.update(actualizacion);
  }

  deleteActualizacion(idSocioeduc: string): void {
    this.actualizacionDoc = this.asf.doc<SocioeducativoActualizacionesInterface>(`socioeducativoactualizaciones/${idSocioeduc}`);
    this.actualizacionDoc.delete();
  }
}
