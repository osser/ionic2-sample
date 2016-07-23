import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/icons/icons.html',
})
export class IconsPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }
    openSource() {
        this.apiService.openGitHubSourceUrl("icons");
    }

}
