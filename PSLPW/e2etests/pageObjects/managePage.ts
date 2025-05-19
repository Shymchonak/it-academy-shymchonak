import {Page, Locator} from "@playwright/test";
import { Base } from "./basePage";
import { CommunitiesList} from "./components/communitiesList";
import { LeftSideMenu } from "../pageObjects/components/leftSideMenu";
import { Communities } from "../testData/constants";

let communitiesList: CommunitiesList
let leftSideMenu: LeftSideMenu
let communitiesConstants: Communities




export class ManagePage extends Base {

    constructor(page: Page) {
        super(page);
        leftSideMenu = new LeftSideMenu(page);
        communitiesConstants = new Communities();
        communitiesList = new CommunitiesList(page);

    }

    get communityNameField(): Locator {
        return this.page.locator('[placeholder="Enter a name for the community"]')
    }

    get privacyDropDownMenu(): Locator {
        return this.page.locator('//span[contains (text(), "Private")]')
    }
    get privateCommunityOption(): Locator {
        return this.page.locator(' //div[contains(text(), "Private")]');
    }

    get publicCommunityOption(): Locator {
        return this.page.locator(' //div[contains(text(), "Public")]');
    }

    get createCommunityButton():Locator {
        return this.page.locator('.button.cyan')
    }

    get additionalCommunityOptions(): Locator {
        return this.page.locator('.icon-options')
    }

    get deleteCommunityButton(): Locator {
        return this.page.locator('//div[contains(text(), "Delete community")]')
    }
    get confirmDeleteCommunityButton(): Locator {
        return this.page.locator('//div[@class=\'modal display-block  \']//button[contains(text(), "Delete")]')
    }

    get buttonSaveDetailsCommunity(): Locator {
        return this.page.locator('//button[contains(text(), "Save details")]')
    }

    get buttonAddTaskStatuses():Locator {
        return this.page.locator('//div[@class=\'status-heading\' and contains(text(),\'Tasks statuses\')]//button')
    }

    get taskStatusNameField(): Locator{
        return this.page.locator('//h2[contains(text(), "Create task status")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    get taskStatusOption():Locator{
        return this.page.locator('//p[contains(text(), "Child status of")]/following-sibling::div[contains(@class, "rw-dropdown-list")]')
    }

    parentTaskStatusSelection(parentName:string){
        return this.page.locator(`//span[contains(text(), "${parentName}")]`)
    }

    colorForParentTaskStatus(parentColor:string){
        return this.page.locator(`[style="background: ${parentColor};"]`)
    }
    get createTaskStatuButton():Locator {
        return this.page.locator('//button[contains(text(), "Create task status")]')
    }
    // async selectPrivacyOfCommunity(setUpPrivacy:Locator):Promise<void>{
    //     await this.privacyDropDownMenu.click();
    //     await setUpPrivacy.click()
    // }


    async createNewCommunity(newCommunityName: string):Promise<void>{
        await leftSideMenu.goToManagePage();
        await communitiesList.addCommunityButton.click();
        await this.communityNameField.fill(newCommunityName)
        await this.createCommunityButton.click()
    }

    async editCommunityName():Promise<void>{
        await this.communityNameField.fill(communitiesConstants.UPDATED_COMMUNITY_DETAILS_NAME);
        await this.buttonSaveDetailsCommunity.click();
    }

    async createCustomTaskStatus(communityName:string,parentStatus:string, parentColor:string):Promise<void>{
        await this.buttonAddTaskStatuses.click();
        await this.taskStatusNameField.fill(communityName);
        await this.taskStatusOption.click();
        await this.parentTaskStatusSelection(parentStatus).click()
        await this.colorForParentTaskStatus(parentColor).click();
        await this.createTaskStatuButton.click()
    }

    async deleteCommunity(nameOfCommunityForDeletion:string):Promise<void>{
        await communitiesList.getCommunityInTheList(nameOfCommunityForDeletion).click()
        await this.additionalCommunityOptions.click();
        await this.deleteCommunityButton.click();
        await this.confirmDeleteCommunityButton.click()
    }
}


