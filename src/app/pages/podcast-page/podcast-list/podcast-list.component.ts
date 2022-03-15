import { Component } from '@angular/core';
import { podcasts } from '../../../core /mocks/response';
import { PodcastItem } from '../../../core /models/podcast-item.typing';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent {
  public podcastList: PodcastItem[] = podcasts.items;
}
