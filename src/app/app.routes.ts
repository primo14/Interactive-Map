import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { InfoComponent } from './info-component/info-component.component';
import { DOCUMENT } from '@angular/common';


export const routes: Routes = [
    { path: 'svg', component: SvgComponent },
    { path: 'info', component: InfoComponent },
    { path: '', component: AppComponent }
];

@NgModule({
   
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ]
})  
export class AppModule { }