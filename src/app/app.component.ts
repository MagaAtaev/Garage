import { Component } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garage';

  categoryList = ["Дешевые", "Средние", "Дорогие"]

  constructor(public store: StoreService) {
    window.addEventListener("message", event => {
      console.log(event)
      
    })
  }

  clickCategory(category: string) {
    this.store.selectCategory(category)
  }
  
  isSelected(category: string) {
    return this.store.selectedCategoryName === category
  }
}
