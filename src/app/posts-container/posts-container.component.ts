import {
    Component, OnInit, AfterViewInit, ViewChild, Renderer, AfterContentInit, ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';
import {PostsService} from "../shared/posts.service";
import {SinglePostComponent} from "./single-post/single-post.component";

@Component({
    selector: 'app-posts-container',
    templateUrl: './posts-container.component.html',
    styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit, AfterContentInit {

    @ViewChild('container', {read: ViewContainerRef}) container;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        // console.log(this.postsService.getName());
    }

    ngAfterContentInit() {
        const singlePostFactory = this.resolver.resolveComponentFactory(SinglePostComponent);
        this.container.createComponent(singlePostFactory);
        this.container.createComponent(singlePostFactory);

        const singlePostRef = this.container.createComponent(singlePostFactory);
        singlePostRef.instance.postTitle =  'this is dynamic';
    }

}

