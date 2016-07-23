import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/toolbar/buttons.html',
})
export class ToolbarButtonsPage implements OnInit {

    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        console.log('enter');
        document.getElementById('md-tabs-icon-text').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    }

    ionViewWillLeave() {
        document.getElementById('md-tabs-icon-text').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }
}
