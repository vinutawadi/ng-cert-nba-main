import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import {FormsModule} from '@angular/forms';
import { GameResultsComponent } from './game-results/game-results.component';
import { GameStatsComponent } from './game-stats/game-stats.component';
import { ConferenceTeamComponent } from './conference-team/conference-team.component';
import { DeleteModalBoxComponent } from './delete-modal-box/delete-modal-box.component';
import { DivisionsTeamComponent } from './divisions-team/divisions-team.component';
import { ModalService } from './delete-modal-box/modal.service';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoaderComponent } from './loader/loader.component';
import { ResultDaysComponent } from './result-days/result-days.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    GameResultsComponent,
    GameStatsComponent,
    ConferenceTeamComponent,
    DeleteModalBoxComponent,
    DivisionsTeamComponent,
    ButtonsComponent,
    LoaderComponent,
    ResultDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
