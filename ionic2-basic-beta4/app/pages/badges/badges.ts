import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/badges/badges.html',
})
export class BadgesPage {

    constructor(private nav: NavController, private apiService: ApiService) {
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("badges");
    }

}
