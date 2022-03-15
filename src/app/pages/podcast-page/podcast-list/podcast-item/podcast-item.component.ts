import { Component, Input } from '@angular/core';
import { PodcastItem } from '../../../../core /models/podcast-item.typing';

@Component({
  selector: 'app-podcast-item',
  templateUrl: './podcast-item.component.html',
  styleUrls: ['./podcast-item.component.scss'],
})
export class PodcastItemComponent {
  @Input() public podcastItem: PodcastItem;
}
