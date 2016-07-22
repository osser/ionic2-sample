import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/selects/selects.html',
})
export class SelectsPage {

    gaming: string = "n64";
    gender: string = "f";
    musicAlertOpts: { title: string, subTitle: string };

    constructor(private nav: NavController) {
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    
    stpSelect() {
        console.log('STP selected');
    }
}
