import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/ranges/ranges.html',
})
export class RangesPage {
    brightness: number = 20;
    contrast: number = 0;
    warmth: number = 1300;
    structure: any = { lower: 33, upper: 60 };
    text: number = 0;
    
    constructor(private nav: NavController, private apiService: ApiService) {

    }
    openSource() {
        this.apiService.openGitHubSourceUrl("ranges");
    }
}
