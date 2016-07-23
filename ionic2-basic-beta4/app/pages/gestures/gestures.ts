import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/gestures/gestures.html',
})
export class GesturesPage {

    public press: number = 0;
    public pan: number = 0;
    public swipe: number = 0;
    public tap: number = 0;

    pressEvent(e) {
        this.press++
    }
    panEvent(e) {
        this.pan++
    }
    swipeEvent(e) {
        this.swipe++
    }
    tapEvent(e) {
        this.tap++
    }

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("gestures");
    }
    
}
