import {
    Component,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export enum SortDirection {
    Asc = 'ASC',
    Desc = 'DESC',
}

export interface SortEvent {
    direction: SortDirection | null,
    field: string | null,
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    public sortSettings: SortEvent = {
        direction: null,
        field: null,
    };

    public sortFields: string[];

    public sortDirections: typeof SortDirection = SortDirection;

    public searchVal = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        const { snapshot } = this.getRouteLastChild(this.activatedRoute);
        this.initFilters(snapshot.data['filterConfig'].sortFields);
        const [field = null, direction = null] = (snapshot.queryParams['sort'] || '').split(',');
        this.sortSettings = { direction, field };

        this.searchVal = snapshot.queryParams['search'] || '';
    }

    public initFilters(sortFields: string[]): void {
        this.sortFields = sortFields;
    }

    public sortChanges(sortField: string): void {
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

        this.router.navigate([], {
            queryParams: {
                sort: this.sortSettings.direction === null
                    ? null
                    : `${this.sortSettings.field},${this.sortSettings.direction}`,
            },
            queryParamsHandling: 'merge',
        });
    }

    public onSearch(): void {
        this.router.navigate([], {
            queryParams: {
                search: this.searchVal,
            },
            queryParamsHandling: 'merge',
        });
    }

    private getRouteLastChild(activatedRoute: ActivatedRoute): ActivatedRoute {
        let route = activatedRoute;

        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }
}
