import { Component } from '@angular/core';
import { PodcastItem } from '../../core /models/podcast-item.typing';
import { podcasts } from '../../core /mocks/response';

@Component({
  selector: 'app-podcast-page',
  templateUrl: './podcast-page.component.html',
  styleUrls: ['./podcast-page.component.scss'],
})
export class PodcastPageComponent {
  public isLoaded: boolean;

  public podcastsArr: PodcastItem[] = podcasts.items;

  initListLoad(): boolean {
    this.isLoaded = true;
    return this.isLoaded;
  }
}
