import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastItem } from '../../models/podcast-item.typing';
import { podcasts } from '../../../core/mocks/response';
import { SortDirection, SortEvent } from '../../../shared/filter/filter.component';
import { PodcastsService } from '../../services/podcasts.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    public isLoaded: boolean;

    public podcastsArr: PodcastItem[];

    public search: string = '';

    constructor(private podcastsService: PodcastsService, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        this.getPodcasts();

        this.activatedRoute.queryParams
            .pipe()
            .subscribe((params) => {
                if (params['sort']) {
                    const [field, direction] = params['sort'].split(',');
                    this.onSort({ field, direction });
                }

                if (params['search'] !== undefined) {
                    this.search = params['search'];
                }
            });
    }

    private getPodcasts() {
        this.podcastsService.getPodcasts().subscribe((p) => {
            this.podcastsArr = p;
        });
    }

    public onSort(sortEvent: SortEvent): void {
        if (sortEvent.direction === null) {
            this.podcastsArr = podcasts.items;
        }

        this.podcastsArr.sort((a, b) => {
            if (sortEvent.field === 'date') {
                const prevVal = +new Date(a.snippet.publishedAt);
                const nextVal = +new Date(b.snippet.publishedAt);
                return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            }

            if (sortEvent.field === 'count') {
                const prevVal = parseInt(a.statistics.viewCount, 10);
                const nextVal = parseInt(b.statistics.viewCount, 10);
                return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            }

            return 0;
        });
    }
}
