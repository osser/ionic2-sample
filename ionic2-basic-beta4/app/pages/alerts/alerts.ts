import { Component } from '@angular/core';
import { Alert, NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/alerts/alerts.html',
})
export class AlertsPage {
    testRadioOpen: boolean;
    testRadioResult;

    testCheckboxOpen: boolean;
    testCheckboxResult;

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openSource() {
        this.apiService.openGitHubSourceUrl("alerts");
    }
    
    doBasic() {
        let alert = Alert.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            buttons: ['Ok']
        });
        this.nav.present(alert);
    }

    doPrompt() {
        let prompt = Alert.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }

    doComfirmation() {
        let confirm = Alert.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        this.nav.present(confirm);
    }

    doRadio() {
        let alert = Alert.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });

        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });

        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });

        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });

        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        this.nav.present(alert).then(() => {
            this.testRadioOpen = true;
        });
    }

    doCheckbox() {
        let alert = Alert.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });

        this.nav.present(alert).then(() => {
            this.testCheckboxOpen = true;
        });
    }

}
