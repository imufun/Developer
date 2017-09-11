import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}from '@angular/forms'
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ListingComponent} from './components/listing/listing.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {EditListingComponent} from './components/edit-listing/edit-listing.component';
import {AddListingComponent} from './components/add-listing/add-listing.component';
import {ListingsComponent} from './components/listings/listings.component';
import {RouterTestingModule} from "@angular/router/testing";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'listings', component: ListingsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListingComponent,
        NavbarComponent,
        EditListingComponent,
        AddListingComponent,
        ListingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
