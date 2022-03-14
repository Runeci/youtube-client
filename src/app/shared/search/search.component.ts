import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchValue = '';

  public podcastIsShown = false;

  onSearch(value: string): void {
    this.searchValue = value;
    this.podcastIsShown = true;
    console.log(this.searchValue, this.podcastIsShown);
  }
}
