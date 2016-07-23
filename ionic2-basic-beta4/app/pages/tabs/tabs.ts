import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/index';

import { TabsBasicPage } from './basic';
import { TabsIconPage } from './icon';
import { TabsIconTextPage } from './icon-text';
import { TabsBadgesPage } from './badges';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

    pages: Array<{ title: string, component: any }>;

    constructor(private nav: NavController, private apiService: ApiService) {
        // set our app's pages
        this.pages = [
            { title: 'Basic', component: TabsBasicPage },
            { title: 'Icon', component: TabsIconPage },
            { title: 'Icon Text', component: TabsIconTextPage },
            { title: 'Badges', component: TabsBadgesPage },
        ];
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("tabs");
    }

    openPage(page) {
        // navigate to the new page if it is not the current page
        if (page.component)
            this.nav.push(page.component);
    }
}
