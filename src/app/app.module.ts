import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './in-memory.service';
import { DailyDoubleComponent } from './components/daily-double/daily-double.component';
import { FormBuilder } from '@angular/forms';
import { FinalJeopardyComponent } from './components/final-jeopardy/final-jeopardy.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ModalComponent,
    ScoreboardComponent,
    DailyDoubleComponent,
    FinalJeopardyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
