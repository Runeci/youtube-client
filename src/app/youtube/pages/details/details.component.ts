import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PodcastId, PodcastItem } from '../../models/podcast-item.typing';
import { PodcastsService } from '../../services/podcasts.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    public id: PodcastId;

    public podcast: PodcastItem;

    constructor(
        private route: ActivatedRoute,
        private podcastsApiService: PodcastsService,
    ) {
    }

    public ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        this.podcastsApiService.getById(this.id)
            .pipe(
                map((r) => {
                    [this.podcast] = [r.items[0]];
                }),
                )
            .subscribe();
    }
}
