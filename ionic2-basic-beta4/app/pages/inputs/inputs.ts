import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InputBasicPage } from './basic';
import { InputFixedInlinePage } from './fixed-inline';
import { InputFloatingPage } from './floating';
import { InputInlinePage } from './inline';
import { InputInsetPage } from './inset';
import { InputPlaceholderPage } from './placeholder';
import { InputStackedPage } from './stacked';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/inputs/inputs.html',
})
export class InputsPage {

    pages: Array<{ title: string, component: any }>;

    constructor(private nav: NavController, private apiService: ApiService) {
        // set our app's pages
        this.pages = [
            { title: 'Basic', component: InputBasicPage },
            { title: 'Fixed Inline', component: InputFixedInlinePage },
            { title: 'Floating', component: InputFloatingPage },
            { title: 'Inline', component: InputInlinePage },
            { title: 'Inset', component: InputInsetPage },
            { title: 'PlaceHolder', component: InputPlaceholderPage },
            { title: 'Stacked', component: InputStackedPage },
        ];
    }

    openPage(page) {
        // navigate to the new page if it is not the current page
        if (page.component)
            this.nav.push(page.component);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("inputs");
    }

}
