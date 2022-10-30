import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeersService } from '../../services/beers.service';
import { Beer } from '../../interfaces/beer';

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.scss']
})
export class BeerDialogComponent implements OnInit {

  /**
   * Beer shown on the material-dialog.
   */
  beer!: Beer;

  /**
   * Constructor.
   * @param beersService service to query the punk api.
   * @param data id of the beer to show in the material-dialog.
   */
  constructor(
    private beersService: BeersService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  /**
   * Get the beer according to the id contained in 
   * the mat-dialog-data.
   */
  ngOnInit(): void {
    this.beersService.getBeerById(this.data)
      .subscribe(beer => this.beer = beer[0]);
  }

}
