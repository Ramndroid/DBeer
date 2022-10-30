import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {

  /**
   * Beer shown on the material-card.
   */
  @Input() beer!: Beer;
  
}
