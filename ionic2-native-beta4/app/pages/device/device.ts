import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from 'ionic-native';

@Component({
    templateUrl: 'build/pages/device/device.html',
})
export class DevicePage implements OnInit {

    device: any;

    constructor(private nav: NavController) {

    }

    ngOnInit() {
        console.log('Device UUID is: ' + Device.device.version);
        this.device = Device.device;
    }

}
