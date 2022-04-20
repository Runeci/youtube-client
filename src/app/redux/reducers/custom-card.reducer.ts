import { createReducer, on } from '@ngrx/store';
import { addCard } from '../actions/custom-card.actions';
import { CustomCard } from '../models/custom-card.model';

export const initialState: CustomCard[] = [];

export const customCardReducer = createReducer(
    initialState,
    on(addCard, (state: CustomCard[], { card }): CustomCard[] => [...state, card]),
);
