import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ClrIconModule, ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, RouterModule, ClarityModule, ClrIconModule],
    exports: [],
    declarations: [HomeComponent, PageNotFoundComponent],
    providers: [],
})
export class CoreModule { }
