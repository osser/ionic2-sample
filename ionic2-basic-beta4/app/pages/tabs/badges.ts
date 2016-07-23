import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/tabs/badges.html',
})
export class TabsBadgesPage implements OnInit {

    tabOne = TabBadgePage;
    tabTwo = TabBadgePage;
    tabThree = TabBadgePage;

    constructor(private nav: NavController) {
    }

    ngOnInit() {

    }


}

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
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
class TabBadgePage {
    constructor(private nav: NavController) {
    }    
    dismiss() {
        this.nav.pop();
    }
}