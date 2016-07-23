import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/toggles/toggles.html',
})
export class TogglesPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("toggles");
    }
}
