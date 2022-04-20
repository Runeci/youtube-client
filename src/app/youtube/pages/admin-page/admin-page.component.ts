import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCard } from '../../../redux/actions/custom-card.actions';
import { selectCustomCards } from '../../../redux/selectors/custom-card.selector';
import { CustomCard } from '../../../redux/models/custom-card.model';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
    public form: FormGroup;

    public minDate: Date = new Date();

    public cards$ = this.store.select(selectCustomCards);

    private urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            title: [
                'Параллельные',
                [Validators.maxLength(20), Validators.minLength(3), Validators.required],
            ],
            description: ['', [Validators.maxLength(255)]],
            img: [
                'https://tvnews.by/uploads/posts/2019-08/1564735600_dpol-reel-english-subs_converted_thumb59.jpg',
                [Validators.pattern(this.urlRegex), Validators.required],
            ],
            linkVideo: [
                'https://www.youtube.com/watch?v=d6L13daWWJU',
                [Validators.pattern(this.urlRegex), Validators.required],
            ],
            date: [new Date()],
        });
    }

    public onSubmit() {
        const card: CustomCard = this.form.value;
        this.form.markAllAsTouched();
        this.store.dispatch(addCard({ card }));
    }
}
