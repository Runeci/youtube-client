import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastItem } from '../../../core /models/podcast-item.typing';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent {
  @Input() podcasts: PodcastItem[];

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((p) => console.log(p['button'])); // you can also do this in ngOnInit
  }
}
