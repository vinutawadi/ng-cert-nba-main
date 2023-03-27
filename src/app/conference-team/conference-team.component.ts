import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  filteredTeamsByConference } from '../data.helper';
import { HtmlInputEvent, Team } from '../data.models';
import *as constant from '../constant'


@Component({
  selector: 'app-conference-team',
  templateUrl: './conference-team.component.html',
  styleUrls: ['./conference-team.component.css']
})
export class ConferenceTeamComponent {
  @Input() allTeams: Team[] = [];
  @Input() divisions: Team[] = [];
  @Output() filteredItemEvent = new EventEmitter<{filteredTeams: Team[], divisionsData:Team[]}>();
  readonly constant = constant
  selectConference(event: HtmlInputEvent) {
    const teamsData = this.allTeams;
    const divisionsData = this.filterDivision(event);
    const filteredTeams = filteredTeamsByConference(teamsData, event);
    const filteredDivisionData = [{
      id: -1, division: 'Select Division', city: '',
      conference: '',
      full_name: '',
      name: '',
      modalId: -1,
      abbreviation: ''
    },...divisionsData]
    this.filteredItemEvent.emit({ filteredTeams: filteredTeams, divisionsData: filteredDivisionData });
  }
  filterDivision(event: HtmlInputEvent) {
    return filteredTeamsByConference(this.divisions, event);
  }
}