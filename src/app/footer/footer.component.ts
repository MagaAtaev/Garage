import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { NuiService } from '../nui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    public store: StoreService,
    private nui: NuiService
  ) {}
  
  buy() {
    if (this.store.selectedCar) {
      console.log(this.store.selectedCar.name)
      this.nui.buyCar(this.store.selectedCar.name).subscribe({
        next: () => {
          console.log("Успешно купили машину")
        },
        error: (err: any) => {
          console.log("Ошибка покупки машины", err)
        }
      })
    }
  }
}
