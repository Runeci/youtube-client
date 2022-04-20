import { Component, Input } from '@angular/core';
import { PodcastItem } from '../../../models/podcast-item.typing';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent {
  @Input() podcasts: PodcastItem[];
}
