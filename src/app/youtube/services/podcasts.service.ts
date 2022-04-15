import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PodcastItem, PodcastPage } from '../models/podcast-item.typing';
import { podcasts } from '../../core/mocks/response';

export interface SearchParams {
    type?: string,
    part?: string,
    maxResults?: string,
    q?: string,
    id?: PodcastItem['id'],
}

@Injectable({
    providedIn: 'root',
})
export class PodcastsService {
    private baseUrl = 'https://www.googleapis.com/youtube/v3';

    private defaultParams: SearchParams = { type: 'video', part: 'snippet', maxResults: '15' };

    constructor(private http: HttpClient) {
    }

    public getPodcasts(params?: SearchParams): Observable<PodcastPage> {
        let queries;
        if (params) {
            queries = { ...this.defaultParams, ...params };
        } else {
            queries = this.defaultParams;
        }
        const options = this.setParams(queries);
        return this.http.get<PodcastPage>(`${this.baseUrl}/search`, { params: options });
    }

    public getById(id: PodcastItem['id']): Observable<PodcastPage> {
        const options = this.setParams({
            part: 'snippet',
            id,
            type: 'video',
        });
        return this.http.get<PodcastPage>(`${ this.baseUrl }/videos`, { params: options });
    }

    private setParams(params: SearchParams): HttpParams {
        let options: HttpParams = new HttpParams();
        Object.entries(params).forEach((option) => {
            options = options.append(option[0], option[1]);
        });

        return options;
    }
}
