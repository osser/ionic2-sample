import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

import { ToolbarBasicPage } from './basic';
import { ToolbarButtonsPage } from './buttons';
import { ToolbarColorsPage } from './colors';
import { ToolbarSearchbarPage } from './searchbar';
import { ToolbarSegmentPage } from './segment';

@Component({
    templateUrl: 'build/pages/toolbar/toolbar.html',
})
export class ToolbarPage {

    pages: Array<{ title: string, component: any }>;

    constructor(private nav: NavController, private apiService: ApiService) {
        // set our app's pages
        this.pages = [
            { title: 'Basic', component: ToolbarBasicPage },
            { title: 'Buttons', component: ToolbarButtonsPage },
            { title: 'Colors', component: ToolbarColorsPage },
            { title: 'SearchBar', component: ToolbarSearchbarPage },
            { title: 'Segment', component: ToolbarSegmentPage },
        ];
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("toolbar");
    }
    
    openPage(page) {
        // navigate to the new page if it is not the current page
        if (page.component)
            this.nav.push(page.component);
    }
}
