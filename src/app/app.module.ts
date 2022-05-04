import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/* Components root */
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// New Components
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailsComponent } from "./components/hero-details/hero-details.component";
import { MessagesComponent } from './components/messages/messages.component';
@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailsComponent, MessagesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
