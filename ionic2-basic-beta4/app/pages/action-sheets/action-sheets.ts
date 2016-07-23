import { Component } from '@angular/core';
import { Platform, ActionSheet, NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/action-sheets/action-sheets.html',
})
export class ActionSheetsPage {

    msg: string;

    constructor(
        public platform: Platform,
        public nav: NavController,
        private apiService: ApiService) {
    }

    openMenu() {
        let actionSheet = ActionSheet.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        this.msg = "Delete clicked";
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        this.msg = "Share clicked";
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        this.msg = "Play clicked";
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        this.msg = "Favorite clicked";
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        this.msg = "Cancel clicked";
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        this.nav.present(actionSheet);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("action-sheets");
    }
}
