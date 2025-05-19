import { test, expect, Page, Locator} from "@playwright/test";
import { LeftSideMenu } from "../pageObjects/components/leftSideMenu";
import { CommunitiesList } from "../pageObjects/components/communitiesList";
import {Communities, Urls, Login} from "../testData/constants";
import { StartPage } from '../pageObjects/startPage';
import { ManagePage } from "../pageObjects/managePage";
import {DashboardPage} from "../pageObjects/dashboardPage";



test.describe.serial('Communities test', () => {

    let page: Page;
    let leftSideMenu: LeftSideMenu;
    let communitiesList: CommunitiesList;
    let communitiesConstants: Communities;
    let loginConstants: Login
    let startPage: StartPage
    let managePage: ManagePage
    let urlsConstants: Urls

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        leftSideMenu = new LeftSideMenu(page);
        communitiesList = new CommunitiesList(page);
        communitiesConstants = new Communities()
        startPage = new StartPage(page);
        loginConstants = new Login();
        managePage = new ManagePage(page)
        urlsConstants = new Urls();


    });

    test.afterAll(async () => {
        await page.close();
    });

    test.skip('New community creation', async () => {
        await managePage.navigate('/admin-dashboard')
        await managePage.createNewCommunity(communitiesConstants.COMMUNITY_DETAILS_NAME);
        await expect (await communitiesList.getCommunityInTheList(communitiesConstants.COMMUNITY_DETAILS_NAME)).toBeVisible()
    })

    test.skip('Edit community name', async () => {
        await managePage.editCommunityName();
        await managePage.navigate(urlsConstants.CUSTOM_FIELDS)
        await managePage.navigate(urlsConstants.MANAGE)
        await expect (await communitiesList.getCommunityInTheList(communitiesConstants.UPDATED_COMMUNITY_DETAILS_NAME)).toBeVisible()
    })

    test('Task custom statuses creation', async() => {
        await managePage.navigate('/communities/manage')
        await communitiesList.getCommunityInTheList(communitiesConstants.UPDATED_COMMUNITY_DETAILS_NAME).click()
        await page.waitForTimeout(5000)
        await managePage.createCustomTaskStatus(communitiesConstants.CUSTOM_TASK_STATUS_PENDING_NAME,communitiesConstants.PARENT_STATUS_PENDING, communitiesConstants.COLOR_FOR_PARENT_PENDING);
        await page.waitForTimeout(5000)
    })

    test.skip('Community deletion', async () =>{
        await managePage.deleteCommunity(communitiesConstants.UPDATED_COMMUNITY_DETAILS_NAME)
        await expect (await communitiesList.getCommunityInTheList(communitiesConstants.UPDATED_COMMUNITY_DETAILS_NAME)).not.toBeVisible()
    })
})