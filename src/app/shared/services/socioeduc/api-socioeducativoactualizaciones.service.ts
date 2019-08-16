import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SocioeducativoActualizacionesInterface } from 'src/app/models/socioeduc/socioeducativoactualizaciones';
import { Observable } from 'rxjs/internal/Observable';

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
}
