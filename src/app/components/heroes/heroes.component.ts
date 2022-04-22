import { Component, OnInit } from "@angular/core";

// Models interface
import { Hero } from "../../shared/models/hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  constructor() {}

  ngOnInit(): void {}
}
