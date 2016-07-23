import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/toolbar/searchbar.html',
})
export class ToolbarSearchbarPage implements OnInit {

    items;

    constructor(private nav: NavController) {
        this.initializeItems();
    }

    ngOnInit() {

    }

    initializeItems() {
        this.items = [
            'Angular 1.x',
            'Angular 2',
            'ReactJS',
            'EmberJS',
            'Meteor',
            'Typescript',
            'Dart',
            'CoffeeScript'
        ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
