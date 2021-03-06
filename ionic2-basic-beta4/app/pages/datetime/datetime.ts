import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/datetime/datetime.html',
})
export class DatetimePage {

    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("datetime");
    }

}
