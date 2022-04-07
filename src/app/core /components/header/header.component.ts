import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortEvent } from '../../../shared/filter/filter.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() public searchClicked: EventEmitter<void> = new EventEmitter();

    @Output() public sort: EventEmitter<SortEvent> = new EventEmitter();

    @Output() public search: EventEmitter<string> = new EventEmitter();

    public filterBarIsShown = false;

    public searchValue: string;

    public podcastIsShown = false;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.route.queryParams
            .subscribe((p) => {
                this.searchValue = p['search'];
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
}
