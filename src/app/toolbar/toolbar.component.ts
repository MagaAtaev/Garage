import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public store: StoreService) {}

  applyFilter(event: any) {
    this.store.setFilter(event.target.value)
    console.log(event.target.value)
  }
}
