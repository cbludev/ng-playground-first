import { Injectable } from '@angular/core';
import {Actor} from './actor';
import {ACTORS} from './mock-actors';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private messageService: MessageService) { }

  getActors(): Observable<Actor[]> {
    this.messageService.add('ActorService: Fetched actors');
    return of(ACTORS);
  }

  getActor(id: number): Observable<Actor> {
    this.messageService.add(`ActorService: Fetched actor id=${id}`);
    return of(ACTORS.find(value => value.id === id));
  }

}
