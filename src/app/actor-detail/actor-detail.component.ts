import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../actor';
import {ActivatedRoute} from '@angular/router';
import {ActorService} from '../actor.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  @Input() actor: Actor;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private actorService: ActorService) { }

  ngOnInit() {
    this.getActor();
  }

  getActor(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.actorService.getActor(id).subscribe(actor => this.actor = actor);
  }

  goBack(): void {
    this.location.back();
  }

}
