import { Injectable} from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService{
  // TIP: showModal$
  // TIP: public shouldShowModal2$: BehaviorSubject<boolean> =  new BehaviorSubject(false);
  public shouldShowModal$: ReplaySubject<boolean> =  new ReplaySubject<boolean>();
  public modalMessage$: ReplaySubject<string> = new ReplaySubject<string>();
  public result$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  
  constructor() {
    this.shouldShowModal$.next(false);
   }

  public showModal(message: string ) {
    this.shouldShowModal$.next(true);
    this.modalMessage$.next(message);
    this.result$.next(false);
  }

  /**
   * Cuando el Modal Component recibe el resultado del usuario, lo almacena en este servicio
   */
  public closeModal(result: boolean) {
    console.log(result);
    this.shouldShowModal$.next(false);
    this.result$.next(result);
  }
}
