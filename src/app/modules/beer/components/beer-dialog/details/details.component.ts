import { Component, Input } from '@angular/core';
import { Beer } from '../../../interfaces/beer';

@Component({
  selector: 'beer-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  /**
   * Beer shown on the material-card.
   */
  @Input() beer!: Beer;

}
