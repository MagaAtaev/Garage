import { Component, Input } from '@angular/core';
import { Car } from '../store.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {
  @Input()
  carlist: Car[] = []


}
