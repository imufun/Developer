import {Component, OnInit, AfterViewInit, ViewChild, Renderer} from '@angular/core';
import {PostsService} from "../shared/posts.service";

@Component({
    selector: 'app-posts-container',
    templateUrl: './posts-container.component.html',
    styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit, AfterViewInit {

    @ViewChild('input1') input1;

    constructor(private renderer: Renderer) {
    }

    ngOnInit() {
       // console.log(this.postsService.getName());
    }

    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.input1.nativeElement,
            'focus',
        );

    }

}

