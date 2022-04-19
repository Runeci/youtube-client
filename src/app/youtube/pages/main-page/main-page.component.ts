import { Component, OnInit } from '@angular/core';
import {
    catchError, debounceTime, distinctUntilChanged, filter, map, Observable, of, switchMap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PodcastItem } from '../../models/podcast-item.typing';
import { PodcastsService, SearchParams } from '../../services/podcasts.service';
import { SortDirection, SortEvent } from '../../../shared/filter/filter.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    public isLoaded: boolean;

    public podcastsArr$: Observable<PodcastItem[]>;

    public podcastArr: PodcastItem[];

    public filteredPodcasts: PodcastItem[];

    private isFirstLoad = true;

    public search: string;

    constructor(private podcastsService: PodcastsService, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        this.podcastsArr$ = this.activatedRoute.queryParams
            .pipe(
                map((params) => params['q']),
                distinctUntilChanged(),
                filter((search) => {
                    if (search && this.isFirstLoad) {
                        this.isFirstLoad = !this.isFirstLoad;
                        return true;
                    }
                    if (search) {
                        return search?.length > 3;
                    }
                    return true;
                }),
                debounceTime(300),
                switchMap((search) => this.getPodcasts(search)),
            );

        this.podcastsArr$
            .subscribe((podcasts) => {
                this.podcastArr = podcasts;
                this.filterPodcast();
            });

        this.activatedRoute.queryParams
            .subscribe(() => {
                this.filterPodcast();
            });
    }

    public filterPodcast(): void {
        const params = this.activatedRoute.snapshot.queryParams;

        if (!this.podcastArr?.length) {
            return;
        }

        this.filteredPodcasts = [...this.podcastArr];

        if (params['sort']) {
            const [field, direction] = params['sort'].split(',');
            this.onSort({ field, direction }, this.filteredPodcasts);
        }

        if (params['search'] !== undefined) {
            this.search = params['search'];
        }
    }

    public onSort(sortEvent: SortEvent, arr: PodcastItem[]): void {
        if (sortEvent.direction === null) {
            return;
        }

        arr.sort((a, b) => {
            if (sortEvent.field === 'date') {
                const prevVal = +new Date(a.snippet.publishedAt);
                const nextVal = +new Date(b.snippet.publishedAt);
                return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            }

            // if (sortEvent.field === 'count') {
            //     const prevVal = parseInt(a.statistics.viewCount, 10);
            //     const nextVal = parseInt(b.statistics.viewCount, 10);
            //     return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            // }
            return 0;
        });
    }

    private getPodcasts(params?: SearchParams): Observable<PodcastItem[]> {
        return this.podcastsService.getPodcasts(params).pipe(
            catchError(() => of({ items: [] })),
            map((r) => r.items || []),
        );
    }
}
