import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostsContainerComponent} from './posts-container/posts-container.component';
import {NavigationComponent} from './navigation/navigation.component';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import {PostsService} from "./shared/posts.service";
import { PostChildComponent } from './post-child/post-child.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsContainerComponent,
        NavigationComponent,
        SinglePostComponent,
        PostChildComponent
    ],
    entryComponents: [SinglePostComponent],
    imports: [
        BrowserModule
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
