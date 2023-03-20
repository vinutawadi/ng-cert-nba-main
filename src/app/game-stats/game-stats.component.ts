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
  days: Array<number> = [6,12,20];
  noOfDays: number = 6;
  showNoOdays: boolean = false;
  constructor(protected nbaService: NbaService) { }

  ngOnInit(): void {
    this.nbaService.getAllTeams().subscribe(data => {
      this.allTeams = data
      this.filteredTeams = this.allTeams;
      const filteredDivisions = filterDivisionData(this.allTeams);
      this.divisions = [{id: 'default', division:  'Select Division'},...filteredDivisions]
      this.filteredivisions = this.divisions;
    })
  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team) {
      this.nbaService.addTrackedTeam(team);
    }
  }

  showDays(event: any) {
    this.showNoOdays = true;
    this.noOfDays = event.noOfDays;
  }

  selectConference(event: any) {
    this.filteredTeams = event.filteredTeams;
    this.filteredivisions = event.divisionsData;
  }
  selectDivision(event: any) {
    this.filteredTeams = event;
  }
  
  selectDays(event: any) {
    this.noOfDays = Number(event.target.value);
  }
}