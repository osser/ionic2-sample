import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/toolbar/colors.html',
})
export class ToolbarColorsPage implements OnInit {

    constructor(private nav: NavController, public viewCtrl: ViewController) {
    }

    ngOnInit() {

    }

    pushPage() {
        this.nav.push(Page2);
    }

    closeWin() {
        // if (this.nav.canGoBack())
        //     this.nav.pop();
        // else
            this.viewCtrl.dismiss();
    }
}

@Component({
    template: `
    <ion-header>
      <ion-navbar light>
        <ion-title>Toolbar: Light</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block light (click)="goBack()">Go Back to Beginning</button>
    </ion-content>
  `
})
export class Page4 {
    constructor(public nav: NavController) {

    }

    goBack() {
        //this.nav.setRoot(ToolbarColorsPage);
        this.nav.push(ToolbarColorsPage);
    }
}


@Component({
    template: `
    <ion-header>
      <ion-navbar danger>
        <ion-title>Toolbar: Danger</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block danger (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page3 {
    constructor(public nav: NavController) {

    }

    pushPage() {
        this.nav.push(Page4);
    }
}


@Component({
    template: `
    <ion-header>
      <ion-navbar secondary>
        <ion-title>Toolbar: Secondary</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block secondary (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page2 {
    constructor(public nav: NavController) {

    }

    pushPage() {
        this.nav.push(Page3);
    }

}