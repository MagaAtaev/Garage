import { Component, Input } from '@angular/core';
import { Car, StoreService } from '../store.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {
  
  carlist: Car[] = []

  constructor(public store: StoreService) {
    this.carlist = this.store.carlist

    this.store.filterValue.subscribe((res) => {
      
      if (res) {
        this.carlist = this.store.carlist.filter(el => el.name.toLowerCase().includes(res.toLowerCase()))
      } else {
        this.carlist = this.store.carlist
      }
    })
  }
  
  clickCar(car: Car) {
    this.store.selectCar(car)
  }

  isSelected(car: Car) {
    return car.name === this.store.selectedCar?.name
  }
}
