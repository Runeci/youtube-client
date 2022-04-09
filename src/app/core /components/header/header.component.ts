import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { filter, map } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() public searchClicked: EventEmitter<void> = new EventEmitter();

    public filterBarIsShown = false;

    public searchValue: string;

    public podcastIsShown = false;

    public showFiltersButton: boolean = false;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        this.router.events
            .pipe(
                // @ts-ignore
                filter((event) => event instanceof NavigationEnd),
                map((event: NavigationEnd) => event.urlAfterRedirects || event.url),
                map(() => this.getRouteLastChild(this.activatedRoute)),
            )
            .subscribe(({ snapshot }: ActivatedRoute) => {
                this.showFiltersButton = !!snapshot.data['filterConfig'];

                if (!this.showFiltersButton) {
                    this.filterBarIsShown = false;
                }
            });
    }

    public onSearch(value: string): void {
        this.searchClicked.emit();

        this.searchValue = value;
        this.podcastIsShown = true;
    }

    toggleFilters() {
        this.filterBarIsShown = !this.filterBarIsShown;
    }

    private getRouteLastChild(activatedRoute: ActivatedRoute): ActivatedRoute {
        let route = activatedRoute;

        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }
}
