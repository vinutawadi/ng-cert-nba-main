
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  filteredTeamsByConference } from '../data.helper';
import { Team } from '../data.models';
import *as constant from '../constant'


@Component({
  selector: 'app-conference-team',
  templateUrl: './conference-team.component.html',
  styleUrls: ['./conference-team.component.css']
})
export class ConferenceTeamComponent {
  @Input() allTeams: Team[] = [];
  @Input() divisions: Team[] = [];
  @Output() filteredItemEvent = new EventEmitter<{}>();
  readonly constant = constant
  selectConference(event: any) {
    const teamsData = this.allTeams;
    const divisionsData = this.filterDivision(event);
    const filteredTeams = filteredTeamsByConference(teamsData, event);
    const filteredDivisionData = [{id: 'default', division:  'Select Division'},...divisionsData]
    this.filteredItemEvent.emit({ filteredTeams: filteredTeams, divisionsData: filteredDivisionData });
  }
  filterDivision(event: any) {
    return filteredTeamsByConference(this.divisions, event);
  }
}