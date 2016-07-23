import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CardAdvancedMapPage } from './advancedmap';
import { CardAdvancedSocialPage } from './advancedsocial';
import { CardAdvancedWeatherPage } from './advancedweather';
import { CardBackgroundPage } from './background';
import { CardBasicPage } from './basic';
import { CardHeadersPage } from './headers';
import { CardImagesPage } from './images';

import { ApiService } from '../../providers/index';

@Component({
    templateUrl: 'build/pages/cards/cards.html',
})
export class CardListPage {

    pageIndex = {
        basic: CardBasicPage,
        headers: CardHeadersPage,
        images: CardImagesPage,
        background: CardBackgroundPage,
        advancedmap: CardAdvancedMapPage,
        advancedsocial: CardAdvancedSocialPage,
        advancedweather: CardAdvancedWeatherPage,
    };

    constructor(private nav: NavController, private apiService: ApiService) {

    }

    openPage(page) {
        this.nav.push(page);
    }

    openSource() {
        this.apiService.openGitHubSourceUrl("cards");
    }

}
