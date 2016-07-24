import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ViewController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/passdata/mymodal.html',
})
export class PassDataMyModalPage implements OnInit {

    param1;
    param2;
    param3;

    constructor(private nav: NavController, private params: NavParams, private viewCtrl: ViewController) {
        //console.log(this.params);
        this.param1 = this.params.get("param1");
        this.param2 = this.params.get("param2");
        this.param3 = this.params.get("param3");
    }

    ngOnInit() {

    }

    closeAction() {
        this.viewCtrl.dismiss({
            result1: "resultvalue1",
            result2: "resultvalue2",
            result3: "resultvalue3",
        });
    }
}
