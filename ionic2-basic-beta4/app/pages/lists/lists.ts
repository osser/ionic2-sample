import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListBasicPage } from './basic';
import { ListNoLinesPage } from './nolines';
import { ListInsetPage } from './inset';
import { ListDividersPage } from './dividers';
import { ListHeadersPage } from './headers';
import { ListIconPage } from './icon';
import { ListAvatarPage } from './avatar';
import { ListMultilinePage } from './multiline';
import { ListSlidingPage } from './sliding';
import { ListThumbnailPage } from './thumbnail';

@Component({
    templateUrl: 'build/pages/lists/lists.html',
})
export class ListsPage {

    pages: Array<{ title: string, component: any }>;

    constructor(private nav: NavController) {
        // set our app's pages
        this.pages = [
            { title: 'Basic', component: ListBasicPage },
            { title: 'Basic(nolines)', component: ListNoLinesPage },
            { title: 'Inset', component: ListInsetPage },
            { title: 'Dividers', component: ListDividersPage },
            { title: 'Headers', component: ListHeadersPage },
            { title: 'Icon', component: ListIconPage },
            { title: 'Avatar', component: ListAvatarPage },
            { title: 'Multiline', component: ListMultilinePage },
            { title: 'Sliding', component: ListSlidingPage },
            { title: 'Thumbnail', component: ListThumbnailPage },
        ];
    }

    openPage(page) {
        // navigate to the new page if it is not the current page
        if (page.component)
            this.nav.push(page.component);
    }
}
