import { Component } from '@angular/core';
import { PodcastItem } from '../../../core /models/podcast-item.typing';
import { podcasts } from '../../../core /mocks/response';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent {
  public podcastList: PodcastItem[] = podcasts.items;
}
