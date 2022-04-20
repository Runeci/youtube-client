import { createReducer, on } from '@ngrx/store';
import { PodcastItem } from '../../youtube/models/podcast-item.typing';
import { getPodcasts } from '../actions/podcasts.action';

export const initialPodcastState: PodcastItem[] = [];

export const podcastsReducer = createReducer(
    initialPodcastState,
    on(getPodcasts, (state: PodcastItem[], { podcasts }) => podcasts),
);
