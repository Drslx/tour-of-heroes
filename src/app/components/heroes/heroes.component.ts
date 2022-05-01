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
  title = "My Heroes";
  /* Dados mockados */
  //  heroes = HEROES;

  heroes: Hero[] = [];
  selectedHero?: Hero;

  /* Injecao do servico */
  constructor(private heroService: HeroService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getHeroes();
  }

  // Metodo do botao
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Metodo para recuperar os heroes do servico / sincrono
  /*   getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } */

  // Metodo assincrono
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = this.heroes));
  }
}
