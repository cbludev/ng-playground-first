import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorsComponent} from './actors/actors.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActorDetailComponent} from './actor-detail/actor-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'actors', component: ActorsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: ActorDetailComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {
}

