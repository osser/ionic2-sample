import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/checkboxes/checkboxes.html',
})
export class CheckboxesPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("checkboxes");
    }

}
