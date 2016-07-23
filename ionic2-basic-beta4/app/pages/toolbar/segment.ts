import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/toolbar/segment.html',
})
export class ToolbarSegmentPage implements OnInit {

    isAndroid: boolean = false;
    selectedSegment: string = "hot";

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    ionViewWillEnter() {
        document.getElementById('md-tabs-icon').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    }

    ionViewWillLeave() {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }


    ngOnInit() {

    }

}
