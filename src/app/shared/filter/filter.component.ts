import { Component, Input } from '@angular/core';
import { PodcastItem } from '../../core /models/podcast-item.typing';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() public podcasts: PodcastItem[];

  public sortVal = '';

  public sortByDate(podcastArr: PodcastItem[]): void {
    if (!this.sortVal || this.sortVal !== 'dateIncr') {
      this.sortVal = 'dateIncr';
      this.sortDateIncr(podcastArr);
    } else if (this.sortVal === 'dateIncr') {
      this.sortVal = 'dateDecr';
      this.sortDateDecr(podcastArr);
    }
  }

  public sortByViews(podcastArr: PodcastItem[]): void {
    if (!this.sortVal || this.sortVal !== 'viewIncr') {
      this.sortVal = 'viewIncr';
      this.sortViewsIncr(podcastArr);
    } else if (this.sortVal === 'viewIncr') {
      this.sortVal = 'viewDecr';
      this.sortViewsDecr(podcastArr);
    }
  }

  private sortDateIncr(podcastArr: PodcastItem[]): void {
    podcastArr.sort((a, b) => {
      const prevVal = +new Date(a.snippet.publishedAt);
      const nextVal = +new Date(b.snippet.publishedAt);
      return nextVal - prevVal;
    });
  }

  private sortDateDecr(podcastArr: PodcastItem[]): void {
    podcastArr.sort((a, b) => {
      const prevVal = +new Date(a.snippet.publishedAt);
      const nextVal = +new Date(b.snippet.publishedAt);
      return prevVal - nextVal;
    });
  }

  private sortViewsIncr(podcastArr: PodcastItem[]): void {
    podcastArr.sort((a, b) => {
      const prevVal = +a.statistics.viewCount;
      const nextVal = +b.statistics.viewCount;
      return nextVal - prevVal;
    });
  }

  private sortViewsDecr(podcastArr: PodcastItem[]): void {
    podcastArr.sort((a, b) => {
      const prevVal = +a.statistics.viewCount;
      const nextVal = +b.statistics.viewCount;
      return prevVal - nextVal;
    });
  }
}
