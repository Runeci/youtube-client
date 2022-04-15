import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
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
                tap((r) => console.log(r)),
                map((r) => {
                    [this.podcast] = [r.items[0]];
                }),
                tap((r) => console.log(r, this.podcast)),
            )
            .subscribe();
    }
}
