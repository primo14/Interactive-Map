import { Routes } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { InfoComponent } from './info-component/info-component.component';
import { CountryDirective } from './directives/country.directive';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'svg', component: SvgComponent },
    { path: 'info', component: InfoComponent },
    { path: 'country', component: CountryDirective }
];


