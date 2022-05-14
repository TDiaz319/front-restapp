import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;
  private _noticeUpload = new EventEmitter<any>();

  constructor() { }

  get noticeUpload(): EventEmitter<any> {
    return this._noticeUpload;
  }

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }

}
