import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { ModalContentPage } from './modal-content';

@Component({
    templateUrl: 'build/pages/modals/modals.html',
})
export class ModalsPage {

    constructor(private nav: NavController) {

    }

    openModal(characterNum) {
        let modal = Modal.create(ModalContentPage, characterNum);
        this.nav.present(modal);
    }
}
