import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beer } from '../../interfaces/beer';
import { BeersService } from '../../services/beers.service';
import { BeerDialogComponent } from '../../components/beer-dialog/beer-dialog.component';
import { SearchParams } from '../../interfaces/search-params';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  /**
   * Word introduced in the input and that will be used to search for matches of beers in the API.
   */
  wordToSearch: string = '';

  /**
   * This variable captures the value of the current parameter selected in the mat-select.
   */
  searchParam: string = 'beer_name';

  /**
   * Array with all search parameters. Obtained from the beer service.
   */
  searchParams: SearchParams[];

  /**
   * Array to store the beers obtained after consultation with the beer service.
   */
  beers: Beer[] = [];

  /**
   * Constructor. The search parameters are obtained from the beer service.
   * @param beersService service to query the punk api.
   * @param dialog material-dialog used to display the details of the beer clicked by the user.
   */
  constructor(
    private beersService: BeersService,
    private dialog: MatDialog
  ) {
    this.searchParams = this.beersService.searchParams;
  }

  /**
   * Deletes the word entered by the user in the input and also sets the array of beers (this.beers) to empty.
   */
  clearWordToSearchAndBeers(): void {
    this.wordToSearch = '';
    this.beers = [];
  }

  /**
   *  Activates the search for the word entered in the input. 
   *  This method is triggered by writing to the input, and by changing the criteria in the mat-select.
   */
  searchTheWord(): void {
    const wordSearch = this.wordToSearch.replace(/\s/g, '_');

    if (wordSearch === '') {
      this.beers = [];
      return;
    }

    this.beersService.getBeersByParam(wordSearch.trim(), this.searchParam)
      .subscribe(beers => this.beers = beers);

  }

  /**
   * Method that is activated when clicking on a card that appears after performing a search.
   * Open a material-dialog.
   * @param id unique identification of each beer.
   */
  onCardClick(id: number): void {
    this.dialog.open(BeerDialogComponent, { data: id });
  }

}
