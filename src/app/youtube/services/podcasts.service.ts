import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PodcastItem } from '../models/podcast-item.typing';
import { podcasts } from '../../core /mocks/response';

@Injectable({
    providedIn: 'root',
})
export class PodcastsService {
    public getPodcasts(): Observable<PodcastItem[]> {
        return of(podcasts.items);
    }

    public getById(id: PodcastItem['id']): Observable<PodcastItem> {
        return of(podcasts.items.find((podcast) => podcast.id === id) || {} as PodcastItem);
    }
}
