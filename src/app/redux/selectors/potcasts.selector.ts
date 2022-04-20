import { createFeatureSelector } from '@ngrx/store';
import { PodcastItem } from '../../youtube/models/podcast-item.typing';

export const selectPodcasts = createFeatureSelector<PodcastItem[]>('podcasts');
