import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor';
import {ActorService} from '../actor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actors: Actor[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors(): void {
    this.actorService.getActors().subscribe(value => this.actors = value.slice(1, 3));
  }

}
