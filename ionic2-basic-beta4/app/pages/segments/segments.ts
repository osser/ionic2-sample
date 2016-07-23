import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/segments/segments.html',
})
export class SegmentsPage {
    pet: string = "puppies";
    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform, private apiService: ApiService) {
        this.isAndroid = platform.is('android');
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("segments");
    }

}
