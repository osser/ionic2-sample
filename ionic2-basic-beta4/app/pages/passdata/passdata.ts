import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';

import { ApiService } from '../../providers/index';

import { PassDataMyModalPage } from './mymodal';

@Component({
    templateUrl: 'build/pages/passdata/passdata.html',
})
export class PassdataPage {

    result1;
    result2;
    result3;

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("passdata");
    }

    openModal() {
        let modal = Modal.create(PassDataMyModalPage, {
            param1: "value1",
            param2: "value2",
            param3: "value3",
        });
        modal.onDismiss(data => {
            //console.log(data);
            this.result1 = data.result1;
            this.result2 = data.result2;
            this.result3 = data.result3;
        });
        this.nav.present(modal);
    }
}
