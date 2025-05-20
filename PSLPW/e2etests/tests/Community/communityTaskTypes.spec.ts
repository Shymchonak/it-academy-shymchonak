import { test, expect, Page} from "@playwright/test";
import { CommunityDetailsPage } from '../../pageObjects/communityDetailsPage'
import { CommunitiesList} from "../../pageObjects/components/communitiesList";
import { CommunityDetails, CustomTaskStatuses, Urls, TaskTypes} from "../../testData/constants";

test.describe.serial('Task types test', () => {

    let page: Page
    let communityDetails: CommunityDetailsPage
    let communitiesList: CommunitiesList
    let communityDetailsConst: CommunityDetails
    let communityTaskStatusesConst: CustomTaskStatuses
    let urlsConst: Urls
    let taskTypesConst: TaskTypes

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetailsConst = new CommunityDetails()
        communityDetails = new CommunityDetailsPage(page)
        urlsConst = new Urls();
        taskTypesConst = new TaskTypes();
        await communityDetails.navigate(urlsConst.MANAGE)
        await communitiesList.getCommunityInTheList(taskTypesConst.COMMUNITY_TASK_TYPE_NAME).click()
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Task type without subtype creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME, taskTypesConst.ICON_ID_BUG_FILL);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_CREATED)).toBeVisible())
    })

    test('Task type without subtype edit', async() => {
        await communityDetails.editTaskType(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME, taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME_EDITED);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_UPDATE)).toBeVisible())
    })
    test('Task type with subtype without timer creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME, taskTypesConst.ICON_ID_BUG_LINE);
        await communityDetails.createSubtypeWithoutTimer(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME, taskTypesConst.SUBTYPE_WITHOUT_TIMER)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.SUBTYPE_CREATED)).toBeVisible())
    })

    test('Task type without subtype deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME_EDITED);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_DELETED)).toBeVisible())
    })

    test('Task type with subtype without TIMER deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_DELETED)).toBeVisible())
    })
})