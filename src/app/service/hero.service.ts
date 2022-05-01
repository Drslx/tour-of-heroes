import { Injectable } from "@angular/core";

import { Hero } from "../shared/models/hero";
import { HEROES } from "../shared/models/mock-heroes";

// Biblioteca
import { Observable, of } from "rxjs";

HEROES;

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}

  // Metodo tem uma assinatura síncrona
  /* getHeroes(): Hero[] {
    return HEROES;
  } */

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
