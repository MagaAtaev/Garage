import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NuiService } from './nui.service';
import { carlist, testMode } from './testdata';

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
  filterValue = new Subject<string>();

  carlist: Car[] = [];

  selectedCar: Car | null = null;

  isVisible = true;

  constructor(public nui: NuiService) {
    this.nuiMessagesListener();
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }

  setFilter(value: string) {
    this.filterValue.next(value);
  }

  private nuiMessagesListener() {
    this.nui.nuiMessage.subscribe(nuiEvent => {
      switch (nuiEvent.act) {
        case "carlistOpen":
          this.isVisible = nuiEvent.payload.isVisible;
          break;
      
        default:
          break;
      }
    })
  }


  getCarlist() {
    return new Promise((resolve) => {
      this.nui.getCarlist().subscribe({
        next: res => {
          this.carlist = res.data
          resolve(true)
        },
        error: (error) => {
          console.error(error);

          if (testMode) {
            this.carlist = carlist;
            resolve(true)
          }
        }
      })
    })
  }

  closeCarshop() {
    return new Promise((resolve, reject) => {
      this.nui.closeCarshop().subscribe(res => {
        if (res.code === 200) {
          this.isVisible = false
          resolve(true)
        } else {
          reject("Ошибка ответа")
        }
      })
    })
  }
}