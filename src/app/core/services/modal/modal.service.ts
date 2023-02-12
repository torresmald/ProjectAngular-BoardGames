import { Injectable} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService{
  public shouldShowModal$: ReplaySubject<boolean> =  new ReplaySubject<boolean>();
  public modalMessage$: ReplaySubject<string> = new ReplaySubject<string>();
  constructor() {
    this.shouldShowModal$.next(false);
   }

  public showModal(message: string ) {
    this.shouldShowModal$.next(true);
    this.modalMessage$.next(message);
  }
  public closeModal() {
    this.shouldShowModal$.next(false);
  }
}
