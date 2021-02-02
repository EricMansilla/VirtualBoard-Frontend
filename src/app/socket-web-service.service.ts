import { Injectable } from '@angular/core';
import * as EventEmitter from 'events';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketWebServiceService extends Socket {

  private outEven: Subject<any> = new Subject();
  public callback: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(
    private cookieService: CookieService
  ) {
    super({
      url: 'http://localhost:3000',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        }
      }
    })
    this.listen();
  }

  listen() {
    this.ioSocket.on('event', (res: any) => {
      this.callback.next(res);
    })
  }

  emitEvent(payload = {}) {
    this.ioSocket.emit('event', payload);
  }

  public get events(): Observable<any> {
    return this.outEven.asObservable();
  }

}
