import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../models/custom-card.model';

export const addCard = createAction(
    '[CARD] add',
    props<{ card: CustomCard }>(),
);
