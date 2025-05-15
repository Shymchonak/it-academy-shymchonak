import { Page, Locator } from '@playwright/test';
import { Base } from './basePage';

export class StartPage extends Base {
    constructor(page: Page) {
        super(page);
    }

    get loginField():Locator {
        return this.page.locator('[placeholder="Email address"]');
    }

    get passwordField():Locator {
        return this.page.locator('[placeholder="Password"]');
    }

    get loginButton():Locator {
        return this.page.locator('.button');
    }
}
