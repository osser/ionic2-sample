import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/selects/selects.html',
})
export class SelectsPage {

    gaming: string = "n64";
    gender: string = "f";
    musicAlertOpts: { title: string, subTitle: string };

    constructor(private nav: NavController, private apiService: ApiService) {
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("selects");
    }

    stpSelect() {
        console.log('STP selected');
    }
}
