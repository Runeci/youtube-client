import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-item',
  templateUrl: './podcast-item.component.html',
  styleUrls: ['./podcast-item.component.scss']
})
export class PodcastItemComponent {
  @Input() public podcastItem: PodcastItem;
}
