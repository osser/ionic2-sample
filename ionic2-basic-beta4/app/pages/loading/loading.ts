import { Component } from '@angular/core';
import { Loading, NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/loading/loading.html',
})
export class LoadingPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("loading");
    }

}
