import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

import {
    Control,
    ControlGroup,
    NgForm,
    Validators,
    NgControl,
    ControlValueAccessor,
    NgControlName,
    NgFormModel,
    FormBuilder
} from '@angular/common';

@Component({
    templateUrl: 'build/pages/radios/radios.html',
})
export class RadiosPage {

    langs;
    langForm;

    constructor(private nav: NavController, private apiService: ApiService) {
        this.langs = new Control("");
        this.langForm = new ControlGroup({
            "langs": this.langs
        });
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("radios");
    }
    
    doSubmit(event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    }
}
