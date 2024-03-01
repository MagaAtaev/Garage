import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public store: StoreService) {}
  
}
