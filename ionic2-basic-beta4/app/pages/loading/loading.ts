import { Component } from '@angular/core';
import { Loading, NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/loading/loading.html',
})
export class LoadingPage {

    constructor(private nav: NavController) {

    }

    presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }

}
