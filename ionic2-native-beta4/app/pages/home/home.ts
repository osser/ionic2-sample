import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { Screenshot, InAppBrowser } from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    msg: any;

    constructor(private navCtrl: NavController) {

    }

    captureScreen() {
        Screenshot.save("jpg", 100, "test").then((result) => {
            if (result) {
                this.msg = JSON.stringify(result);
                console.error(result);
            }
        });
    }

    openGoogle() {
        InAppBrowser.open("http://www.google.co.jp", "_blank", "location=no");
    }
}
