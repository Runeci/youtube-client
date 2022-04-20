import { createFeatureSelector } from '@ngrx/store';
import { CustomCard } from '../models/custom-card.model';

export const selectCustomCards = createFeatureSelector<CustomCard[]>('customCards');
