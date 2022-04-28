import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "src/app/shared/models/hero";

@Component({
  selector: "app-hero-details",
  templateUrl: "./hero-details.component.html",
  styleUrls: ["./hero-details.component.scss"],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
