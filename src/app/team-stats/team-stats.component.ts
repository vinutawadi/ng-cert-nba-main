import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NbaService } from '../nba.service';
import { Game, Stats, Team } from '../data.models';
import { ModalService } from '../delete-modal-box/modal.service';
import { Router } from '@angular/router';

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
  @Input() noOfDays: number = 6;
  @Output() daysEvent = new EventEmitter<{}>();
  constructor(protected nbaService: NbaService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.games$ = this.nbaService.getLastResults(this.team, this.noOfDays).pipe(
      tap(games => {
        this.noOfDays = (window.history.state.days ? window.history.state.days : this.noOfDays );
        this.daysEvent.emit({noOfDays: this.noOfDays})
        return this.stats = this.nbaService.getStatsFromGames(games, this.team)
      })
    )
  }
  openModal(id: number) {
    this.opneModal = true;
    this.modalService.open(id);
  }
}