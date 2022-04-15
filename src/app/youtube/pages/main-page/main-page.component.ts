import { Component, OnInit } from '@angular/core';
import {
 catchError, debounceTime, filter, map, Observable, of, switchMap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PodcastItem } from '../../models/podcast-item.typing';
import { PodcastsService, SearchParams } from '../../services/podcasts.service';
// import { SortDirection, SortEvent } from '../../../shared/filter/filter.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    public isLoaded: boolean;

    public podcastsArr$: Observable<PodcastItem[]>;

    private isFirstLoad = true;

    constructor(private podcastsService: PodcastsService, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        this.podcastsArr$ = this.activatedRoute.queryParams
            .pipe(
                filter((params) => {
                    if (params['q'] && this.isFirstLoad) {
                        this.isFirstLoad = !this.isFirstLoad;
                        return true;
                    }
                    if (params['q']) {
                        return params['q']?.length > 3;
                    }
                    return true;
                }),
                debounceTime(300),
                switchMap((params) => this.getPodcasts(params)),
            );

        // this.podcastsArr$ = this.getPodcasts();
        //     .subscribe((params) => {
        //         if (params['sort']) {
        //             // const [field, direction] = params['sort'].split(',');
        //             // this.onSort({ field, direction });
        //         }
        //
        //         if (params['search'] !== undefined) {
        //             this.search = params['search'];
        //         }
        //     });
    }

    private getPodcasts(params?: SearchParams): Observable<PodcastItem[]> {
        return this.podcastsService.getPodcasts(params).pipe(
            catchError(() => of({ items: [] })),
            map((r) => r.items || []),
        );
    }

    // public onSort(sortEvent: SortEvent): void {
    //     if (sortEvent.direction === null) {
    //         this.podcastsArr$ = this.getPodcasts();
    //     }
    //     console.log('onsort');
    //     this.podcastsArr$.pipe(
    //         map((r) => {
    //             r.sort((a, b) => {
    //                 if (sortEvent.field === 'date') {
    //                     const prevVal = +new Date(a.snippet.publishedAt);
    //                     const nextVal = +new Date(b.snippet.publishedAt);
    //                     return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
    //                 }
    //
    //                 if (sortEvent.field === 'count') {
    //                     // const prevVal = parseInt(a.statistics.viewCount, 10);
    //                     // const nextVal = parseInt(b.statistics.viewCount, 10);
    //                     // return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
    //                 }
    //
    //                 return 0;
    //             });
    //             return r;
    //         }),
    //     ).subscribe();
    // }
}
