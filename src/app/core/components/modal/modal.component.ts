import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'games-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit  {
  public shouldShowModal? : boolean;
  public modalMessage?: string;

  constructor(private  modalService: ModalService) {}
  
  public ngOnInit(): void {
    // TODO: Refactorizar para evitar usar una suscripcion con el pipe async
    this.modalService.shouldShowModal$.subscribe((value) => {
      this.shouldShowModal = value
    });
    this.modalService.modalMessage$.subscribe((message) => {
      this.modalMessage = message
    })
  }
  
  public confirm(cancel: boolean){
    console.log(cancel);
    this.modalService.closeModal(cancel) 
  }
}
