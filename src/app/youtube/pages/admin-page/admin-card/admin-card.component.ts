import { Component, Input } from '@angular/core';
import { CustomCard } from '../../../../redux/models/custom-card.model';

@Component({
    selector: 'app-admin-card',
    templateUrl: './admin-card.component.html',
    styleUrls: ['./admin-card.component.scss'],
})
export class AdminCardComponent {
    @Input() card: CustomCard;
}
