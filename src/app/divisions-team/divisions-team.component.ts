import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  filteredTeamsByDivision } from '../data.helper';
import { HtmlInputEvent, Team } from '../data.models';

@Component({
  selector: 'app-divisions-team',
  templateUrl: './divisions-team.component.html',
  styleUrls: ['./divisions-team.component.css']
})
export class DivisionsTeamComponent {
  @Input() filteredTeams: Team[] = [];
  @Input() divisions: Team[] = [];
  @Output() filteredItemEvent = new EventEmitter<{teams: Team[]}>();

  selectDivision(event: HtmlInputEvent) {
    const teams = filteredTeamsByDivision(this.filteredTeams,this.divisions, (event?.target as HTMLTextAreaElement).value);
    this.filteredItemEvent.emit({teams: teams});
  }

}