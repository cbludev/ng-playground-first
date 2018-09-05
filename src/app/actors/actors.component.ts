import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor';
import {ACTORS} from '../mock-actors';
import {ActorService} from '../actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actors = actors);
  }
}
