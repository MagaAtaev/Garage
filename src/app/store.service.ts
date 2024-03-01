import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Car {
  image: string
  name: string
  maxSpeed: number
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  filterValue = new Subject<string>()

  carlist: Car[] = [
    {
      name: "Adder",
      image: "https://docs.fivem.net/vehicles/adder.webp",
      maxSpeed: 300,
      price: 1200000,
    },

    {
      name: "Ardent",
      image: "https://docs.fivem.net/vehicles/ardent.webp",
      maxSpeed: 250,
      price: 700000,
    },

    {
      name: "GP1",
      image: "https://docs.fivem.net/vehicles/gp1.webp",
      maxSpeed: 315,
      price: 1300000,
    },

    {
      name: "Ignus",
      image: "https://docs.fivem.net/vehicles/ignus.webp",
      maxSpeed: 330,
      price: 1700000,
    },

    {
      name: "Impaler",
      image: "https://docs.fivem.net/vehicles/impaler.webp",
      maxSpeed: 225,
      price: 500000,
    },

    {
      name: "Impaler SZ",
      image: "https://docs.fivem.net/vehicles/impaler5.webp",
      maxSpeed: 230,
      price: 650000,
    },

]

  selectedCar: Car | null = null

  constructor() { }

  selectCar(car: Car) {
    this.selectedCar = car
  }

  setFilter(value: string) {
    this.filterValue.next(value)
  }
}
