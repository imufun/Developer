import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-post-child',
    templateUrl: './post-child.component.html',
    styleUrls: ['./post-child.component.css']
})
export class PostChildComponent implements OnInit {

    @Input() title; // decorator -> @Input()

    constructor() {
    }

    ngOnInit() {
    }

}
