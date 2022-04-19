import { Component, Input } from '@angular/core';
import { PodcastItem } from '../../../../core/models/podcast-item.typing';

@Component({
  selector: 'app-podcast-item',
  templateUrl: './podcast-item.component.html',
  styleUrls: ['./podcast-item.component.scss'],
})
export class PodcastItemComponent {
  @Input() public podcastItem: PodcastItem;

  changeBottomBorderColor(date: string): string {
    const publicationDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    const dateInterval = currentDate - publicationDate;

    const weekInMs = 7 * 24 * 60 * 60 * 1000;
    const monthInMs = 30 * 24 * 60 * 60 * 1000;
    const halfOfYearInMs = 6 * 30 * 24 * 60 * 60 * 1000;

    let color = '';

    if (dateInterval > halfOfYearInMs) {
      color = 'red';
    } else if (dateInterval < weekInMs) {
      color = 'green';
    } else if (dateInterval < monthInMs) {
      color = 'blue';
    }
    return color;
  }
}
