import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PersonComponent} from "./person.component";
import {SkiJumpers} from "./ski-jumpers.component";
import {SkiJumpersService} from "./ski-jumpers.service";

@NgModule({
  declarations: [
    AppComponent, PersonComponent, SkiJumpers
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SkiJumpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
