import { Injectable } from "@angular/core";

import { Hero } from "../shared/models/hero";
import { HEROES } from "../shared/models/mock-heroes";

HEROES;

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}

  // Metodo tem uma assinatura síncrona
  getHeroes(): Hero[] {
    return HEROES;
  }
}
