import { Component } from '@angular/core';
import { PodcastItem } from '../../models/podcast-item.typing';
import { podcasts } from '../../../core /mocks/response';
import { SortDirection, SortEvent, SortFields } from '../../../shared/filter/filter.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
    public isLoaded: boolean;

    public podcastsArr: PodcastItem[] = podcasts.items;

    public search: string = '';

    public onSort(sortEvent: SortEvent): void {
        if (sortEvent.direction === null) {
            this.podcastsArr = podcasts.items;
        }

        this.podcastsArr.sort((a, b) => {
            if (sortEvent.field === SortFields.Date) {
                const prevVal = +new Date(a.snippet.publishedAt);
                const nextVal = +new Date(b.snippet.publishedAt);
                return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            }

            if (sortEvent.field === SortFields.Count) {
                const prevVal = parseInt(a.statistics.viewCount, 10);
                const nextVal = parseInt(b.statistics.viewCount, 10);
                return sortEvent.direction === SortDirection.Asc ? (nextVal - prevVal) : (prevVal - nextVal);
            }

            return 0;
        });
    }
}
