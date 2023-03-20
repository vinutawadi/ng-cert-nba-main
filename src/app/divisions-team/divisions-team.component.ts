import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  filteredTeamsByDivision } from '../data.helper';
import { Team } from '../data.models';

@Component({
  selector: 'app-divisions-team',
  templateUrl: './divisions-team.component.html',
  styleUrls: ['./divisions-team.component.css']
})
export class DivisionsTeamComponent {
  @Input() filteredTeams: Team[] = [];
  @Input() divisions: Team[] = [];
  @Output() filteredItemEvent = new EventEmitter<Team[]>();
  selectDivision(event: any) {
    const teams = filteredTeamsByDivision(this.filteredTeams,this.divisions, event.target.value);
    this.filteredItemEvent.emit(teams);
  }

}