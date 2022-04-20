import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { customCardReducer } from './custom-card.reducer';
import { CustomCard } from '../models/custom-card.model';
import { PodcastItem } from '../../youtube/models/podcast-item.typing';
import { podcastsReducer } from './podcasts.reducer';

export interface State {
    customCards: CustomCard[],
    podcasts: PodcastItem[],
}

export const reducers: ActionReducerMap<State> = {
    customCards: customCardReducer,
    podcasts: podcastsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
