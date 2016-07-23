import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, Popover, NavController, Content, NavParams } from 'ionic-angular';

import { PopWinPage } from './popwin';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/popovers/popovers.html',
})
export class PopoversPage {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    presentPopover(ev) {
        let popover = Popover.create(PopWinPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        this.nav.present(popover, {
            ev: ev
        });
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("popovers");
    }
}
