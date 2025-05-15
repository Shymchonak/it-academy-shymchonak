import { test, expect, Page } from '@playwright/test';
import { StartPage } from '../pageObjects/startPage';
import { DashboardPage } from '../pageObjects/dashboardPage';

test.describe('Login page tests', () => {
    let startPage: StartPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }: {page: Page}) => {
        startPage = new StartPage(page);
        dashboardPage = new DashboardPage(page);
    });

    test('Valid login', async () => {
        await startPage.navigate('https://staging.pasalo.pro/login');
        await startPage.loginField.fill('shymnakjob+1000@gmail.com');
        await startPage.passwordField.fill('V1@chaslau');
        await startPage.loginButton.click();
      //  await dashboardPage.page.waitForTimeout(4000)
        await expect( await dashboardPage.logoutButton.textContent()).toContain('Logout');
    });
});
