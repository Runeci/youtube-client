import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
    public form: FormGroup;

    public minDate: Date = new Date();

    private urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    constructor(private fb: FormBuilder) {
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
        this.form.markAllAsTouched();
    }
}
