import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/grid/grid.html',
})
export class GridPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }
    openSource() {
        this.apiService.openGitHubSourceUrl("grid");
    }

}
