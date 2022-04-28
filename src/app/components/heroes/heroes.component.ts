import { Component, OnInit } from "@angular/core";

// Models interface
import { Hero } from "../../shared/models/hero";

// O Servico que ira passar
// import { HEROES } from "../../shared/models/mock-heroes";

// Service
import { HeroService } from "../../service/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  /* Dados mockadosnod */
  //  heroes = HEROES;

  heroes: Hero[] = [];
  selectedHero?: Hero;

  /* Injecao do servico */
  constructor(private heroService: HeroService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Metodo para recuperar os heroes do servico
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
