import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabPage } from './fab';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/buttons/buttons.html',
})
export class ButtonsPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openFAB() {
        this.nav.push(FabPage);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("buttons");
    }
}
