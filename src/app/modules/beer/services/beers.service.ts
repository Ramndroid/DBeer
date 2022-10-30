import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/beer';
import { environment } from '../../../../environments/environment';
import { SearchParams } from '../interfaces/search-params';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  /**
   * API url extracted from environment file.
   */
  private punkApiUrl: string = environment.punkApiUrl;

  /**
   * Array used in dropdown to display search parameters.
   * Add here if more search parameters are desired.
   */
  private _searchParams: SearchParams[] = [
    {
      value: 'beer_name',
      name: 'Name'
    },
    {
      value: 'yeast',
      name: 'Yeast'
    },
    {
      value: 'malt',
      name: 'Malt'
    },
    {
      value: 'food',
      name: 'Food pairing'
    }
  ];

  /**
   * Returns the array of search parameters.
   */
  get searchParams(): SearchParams[] {
    return this._searchParams;
  }

  /**
   * Constructor.
   * @param http HttpClient module used to query the API.
   */
  constructor(private http: HttpClient) { }

  /**
   * Get beers based on search parameter.
   * @param wordToSearch word entered by the user in the main input of the application, used to search for matches.
   * @param searchParam parameter used for the search. Check the punk api for more details.
   * @returns Observable<Beer[]>.
   */
  getBeersByParam(wordToSearch: string, searchParam: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.punkApiUrl}?${searchParam}=${wordToSearch}`);
  }

  /**
   * Get beer according to id. Used to display the beer information in the material-dialog.
   * @param id beer id.
   * @returns Observable<Beer[]> but it returns a single element array.
   */
  getBeerById(id: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.punkApiUrl}/${id}`);
  }

}
