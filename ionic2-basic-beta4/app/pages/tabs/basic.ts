import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/tabs/basic.html',
})
export class TabsBasicPage implements OnInit {

    tabOne = TabTextPage;
    tabTwo = TabTextPage;
    tabThree = TabTextPage;

    constructor(private nav: NavController) {
    }

    ngOnInit() {

    }

}

@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Basic Tabs</ion-title>
        <ion-buttons start>
            <button (click)="dismiss()">
                <span primary showWhen="ios">戻る</span>
                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
            </button>
        </ion-buttons>        
      </ion-navbar>
    </ion-header>
    <ion-content padding>
        <p>Helo Tabs.</p>
        <button (click)="dismiss()">Close</button>
    </ion-content>
`})
class TabTextPage {
    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    dismiss() {
        this.nav.pop();
    }
}