import { createAction, props } from '@ngrx/store';
import { PodcastItem } from '../../youtube/models/podcast-item.typing';

export const getPodcasts = createAction('[PODCASTS] get', props<{ podcasts: PodcastItem[] }>());
