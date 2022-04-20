import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCard } from '../../../redux/actions/custom-card.actions';
import { customCardsSelector } from '../../../redux/selectors/custom-card.selector';
import { CustomCard } from '../../../redux/models/custom-card.model';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
    public form: FormGroup;

    public minDate: Date = new Date();

    public cards$ = this.store.select(customCardsSelector);

    private urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            title: ['', [Validators.maxLength(20), Validators.minLength(3), Validators.required]],
            description: ['', [Validators.maxLength(255)]],
            img: ['', [Validators.pattern(this.urlRegex), Validators.required]],
            linkVideo: ['', [Validators.pattern(this.urlRegex), Validators.required]],
            date: [''],
        });
    }

    public onSubmit() {
        const card: CustomCard = this.form.value;

        this.form.markAllAsTouched();
        this.store.dispatch(addCard({ card }));
    }
}
