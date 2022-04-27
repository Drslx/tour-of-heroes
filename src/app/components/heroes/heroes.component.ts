import { Component, OnInit } from "@angular/core";

// Models interface
import { Hero } from "../../shared/models/hero";
import { HEROES } from "./../../shared/models/mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero?: Hero;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
