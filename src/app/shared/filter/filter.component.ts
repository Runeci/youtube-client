import { Component, EventEmitter, Output } from '@angular/core';

export enum SortDirection {
    Asc = 'ASC',
    Desc = 'DESC',
}

export enum SortFields {
    Date = 'date',
    Count = 'count',
}

export interface SortEvent {
    direction: SortDirection | null,
    field: SortFields,
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    @Output() public filterSearchInput = new EventEmitter<string>();

    @Output() public sort: EventEmitter<SortEvent> = new EventEmitter();

    public sortSettings: SortEvent = {
        direction: null,
        field: SortFields.Date,
    };

    public sortFields: typeof SortFields = SortFields;

    public sortDirections: typeof SortDirection = SortDirection;

    public searchVal = '';

    public sortChanges(sortField: SortFields): void {
        let newDirection;

        switch (this.sortSettings.direction) {
            case SortDirection.Asc:
                newDirection = SortDirection.Desc;
                break;
            case SortDirection.Desc:
                newDirection = null;
                break;
            case null:
                newDirection = SortDirection.Asc;
                break;
            default:
                newDirection = null;
                break;
        }

        this.sortSettings = {
            field: sortField,
            direction: newDirection,
        };
        this.sort.emit(this.sortSettings);
    }
}
