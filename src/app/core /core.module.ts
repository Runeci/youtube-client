import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FilterComponent } from '../shared/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FilterComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        HeaderComponent,
    ],
})
export class CoreModule {
}
