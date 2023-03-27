
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbaService } from '../nba.service';
import { Game, Team } from '../data.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent implements OnInit{

  team?: Team;
  games$?: Observable<Game[]>;
  resultDays: number = 6;

  constructor(private activatedRoute: ActivatedRoute, private nbaService: NbaService) {}

  ngOnInit() {
    this.nbaService.currentResultDays.subscribe(msg => {
      this.resultDays = msg;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.team = this.nbaService.getTrackedTeams().find(team => team.abbreviation === paramMap.get("teamAbbr"));
      if (this.team)
        this.games$ = this.nbaService.getLastResults(this.team, this.resultDays);
    })
  });
  }
}