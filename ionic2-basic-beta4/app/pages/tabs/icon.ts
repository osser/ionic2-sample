import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/tabs/icon.html',
})
export class TabsIconPage implements OnInit {

    tabOne = TabIconPage;
    tabTwo = TabIconPage;
    tabThree = TabIconPage;
    tabFour = TabIconPage;
    isAndroid: boolean = false;

    constructor(private nav: NavController, platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    ngOnInit() {

    }

    ionViewWillLeave() {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }
}

@Component({
    template: `
    <ion-header>
      <ion-navbar [attr.danger]="isAndroid ? '' : null">
        <ion-title>Icon Tabs</ion-title>
        <ion-buttons start>
            <button (click)="dismiss()">
                <span primary showWhen="ios">返回</span>
                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
            </button>
        </ion-buttons>        
      </ion-navbar>
    </ion-header>
    <ion-content padding>
        <p>Helo Icon tabs.</p>
        <button (click)="dismiss()">Close</button>
    </ion-content>
`})
class TabIconPage {
    isAndroid: boolean = false;

    constructor(private nav: NavController, platform: Platform) {
        this.isAndroid = platform.is('android');
    }

    ionViewWillEnter() {
        document.getElementById('md-tabs-icon').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    }

    dismiss() {
        this.nav.pop();
    }    
}
