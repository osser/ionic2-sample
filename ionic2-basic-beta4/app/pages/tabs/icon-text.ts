import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/tabs/icon-text.html',
})
export class TabsIconTextPage implements OnInit {

    tabOne = TabIconTextPage;
    tabTwo = TabIconTextPage;
    tabThree = TabIconTextPage;
    tabFour = TabIconTextPage;
    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    ngOnInit() {

    }

}


@Component({
    template: `
    <ion-header>
      <ion-navbar [attr.royal]="isAndroid ? '' : null">
        <ion-title>Tabs</ion-title>
        <ion-buttons start>
            <button (click)="dismiss()">
                <span primary showWhen="ios">＜</span>
                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
            </button>
        </ion-buttons>        
      </ion-navbar>
    </ion-header>
    <ion-content padding>
        <p>Helo IconText tabs.</p>
        <button (click)="dismiss()">Close</button>
    </ion-content>
`})
class TabIconTextPage {
    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    dismiss() {
        this.nav.pop();
    }
}