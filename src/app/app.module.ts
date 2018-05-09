import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingmodule } from './app-routing.module';
import { FirstComponent } from './app.firstcomponent';
import { secondcomp } from './app.secondcomponent';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    secondcomp
  ],
  imports: [
    BrowserModule,
    AppRoutingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
