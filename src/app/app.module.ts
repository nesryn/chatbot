import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
