
import { Component, OnInit } from '@angular/core';
import { Team } from '../data.models';
import { NbaService } from '../nba.service';
import { filterDivisionData } from '../data.helper';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent implements OnInit {

  filteredTeams: Team[] = [];
  allTeams: Team[] = [];
  divisions: Team[] = [];
  filteredivisions: Team[] = [];
  showNoOdays: boolean = false;
  resultDays: number = 6;
  loader: boolean = false;
  constructor(protected nbaService: NbaService) { }

  ngOnInit(): void {
    this.loader = true;
    this.nbaService.getAllTeams().subscribe(data => {
      this.loader = false;
      this.allTeams = data
      this.filteredTeams = this.allTeams;
      const filteredDivisions = filterDivisionData(this.allTeams);
      this.divisions = [{id: 'default', division:  'Select Division'},...filteredDivisions]
      this.filteredivisions = this.divisions;
    });
    this.nbaService.currentResultDays.subscribe(msg =>{
      this.resultDays = msg;
    });
  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team) {
      this.nbaService.addTrackedTeam(team);
    }
  }

  showDays(event: any) {
    this.showNoOdays = true;
  }

  selectConference(event: any) {
    this.filteredTeams = event.filteredTeams;
    this.filteredivisions = event.divisionsData;
  }
  selectDivision(event: any) {
    this.filteredTeams = event;
  }
  
 
}