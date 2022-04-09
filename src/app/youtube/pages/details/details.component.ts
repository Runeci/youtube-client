import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastItem } from '../../models/podcast-item.typing';
import { PodcastsService } from '../../services/podcasts.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    public id: string;

    public podcast: PodcastItem;

    constructor(
        private route: ActivatedRoute,
        private podcastsApiService: PodcastsService,
    ) {}

    public ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.podcastsApiService.getById(this.id)
            .subscribe((podcast) => {
                this.podcast = podcast;
            });
    }
}
