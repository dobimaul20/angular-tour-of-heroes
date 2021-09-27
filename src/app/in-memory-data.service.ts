import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 11, name: 'Gajah Mada' },
  { id: 12, name: 'Ir. Soekarno' },
  { id: 13, name: 'Mohammad Hatta' },
  { id: 14, name: 'R.A. Kartini' },
  { id: 15, name: 'Dewi Sartika' },
  { id: 16, name: 'Pangeran Diponegoro' },
  { id: 17, name: 'Pattimura' },
  { id: 18, name: 'Otto Iskandar' },
  { id: 19, name: 'Cut Nyadien' },
  { id: 20, name: 'Imam Bonjol' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}