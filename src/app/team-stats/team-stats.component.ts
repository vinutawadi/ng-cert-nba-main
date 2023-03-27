import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NbaService } from '../nba.service';
import { Game, Stats, Team } from '../data.models';
import { ModalService } from '../delete-modal-box/modal.service';
import { Router } from '@angular/router';
import *as constant from '../constant'

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  @Input()
  team!: Team;
  bodyText: string = ''
  opneModal: boolean = false;
  games$!: Observable<Game[]>;
  stats!: Stats;
  resultDays: number = 6;
  loader: boolean = false;
  @Output() teamData = new EventEmitter<boolean>();
  readonly constant = constant;
  close: boolean = false;

  constructor(protected nbaService: NbaService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.loader = true;
    this.nbaService.currentResultDays.subscribe(msg => {
      this.loader = true;
      this.resultDays = msg;
      this.games$ = this.nbaService.getLastResults(this.team, this.resultDays).pipe(
        tap(games => {
          this.teamData.emit(true);
          this.loader = false;
          return this.stats = this.nbaService.getStatsFromGames(games, this.team)
        })
      )
    });

  }

  
  openModal(id: number) {
    this.close = false;
    this.opneModal = true;
    this.modalService.open(id);
  }

  deleteTeam(event: string, element: Team) {
    if (event === 'yes') {
      this.nbaService.removeTrackedTeam(element);
      this.modalService.close(element.modalId);
    } else {
      this.close = true;

    }
  }
}