import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbaService } from '../nba.service';
import *as constant from '../constant'

@Component({
  selector: 'app-result-days',
  templateUrl: './result-days.component.html',
  styleUrls: ['./result-days.component.css']
})
export class ResultDaysComponent implements OnInit {
  days: Array<number> = [6,12,20];
  resultDays: number = 6;
  readonly constant = constant;

 
  constructor(protected nbaService: NbaService){}

  ngOnInit() {
    this.nbaService.currentResultDays.subscribe(msg => this.resultDays = msg);
  }

  selectDays(event: any) {
    this.nbaService.updateDays(Number(event.target.value))
  }
}