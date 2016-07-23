import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { ModalContentPage } from './modal-content';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/modals/modals.html',
})
export class ModalsPage {

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openModal(characterNum) {
        let modal = Modal.create(ModalContentPage, characterNum);
        this.nav.present(modal);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("modals");
    }

}
