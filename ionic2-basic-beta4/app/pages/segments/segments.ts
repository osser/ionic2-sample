import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

/*
  Generated class for the SegmentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/segments/segments.html',
})
export class SegmentsPage {
    pet: string = "puppies";
    isAndroid: boolean = false;

    constructor(private nav: NavController, private platform: Platform) {
        this.isAndroid = platform.is('android');
    }

}
