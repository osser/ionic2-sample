import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
    constructor(private navCtrl: NavController, private apiService: ApiService) {
    }
    openSource(){
        this.apiService.openGitHubSourceUrl("home");
    }
}
