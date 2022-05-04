import { Injectable } from "@angular/core";

// Biblioteca
import { Observable, of } from "rxjs";

// Service
import { MessageService } from "./message.service";

import { Hero } from "../shared/models/hero";
import { HEROES } from "../shared/models/mock-heroes";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // Metodo tem uma assinatura síncrona
  /* getHeroes(): Hero[] {
    return HEROES;
  } */

  // Metodo para pegar hero
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: feteched heroes");
    return heroes;
  }
}
