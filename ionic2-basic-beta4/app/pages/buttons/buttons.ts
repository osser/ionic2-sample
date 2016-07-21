import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabPage } from './fab';

@Component({
    templateUrl: 'build/pages/buttons/buttons.html',
})
export class ButtonsPage {

    constructor(private nav: NavController) {

    }

    openFAB() {
        this.nav.push(FabPage);
    }
}
