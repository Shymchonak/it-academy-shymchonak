import {Page, Locator} from "@playwright/test";
import { Base } from "./basePage";
import { CommunitiesList} from "./components/communitiesList";
import { LeftSideMenu } from "../pageObjects/components/leftSideMenu";
import { CommunityDetails } from "../testData/constants";

let communitiesList: CommunitiesList
let leftSideMenu: LeftSideMenu
let communityDetailsConst: CommunityDetails




export class CommunityDetailsPage extends Base {

    constructor(page: Page) {
        super(page);
        leftSideMenu = new LeftSideMenu(page);
        communityDetailsConst = new CommunityDetails();
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
    get confirmDeleteButton(): Locator {
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

    get taskStatusNameFieldForEdit(): Locator{
        return this.page.locator('//h2[contains(text(), "Update task status")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
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
    get updateTaskStatuButton():Locator {
        return this.page.locator('//button[contains(text(), "Update task status")]')
    }
    // async selectPrivacyOfCommunity(setUpPrivacy:Locator):Promise<void>{
    //     await this.privacyDropDownMenu.click();
    //     await setUpPrivacy.click()
    // }

    get descriptionField(): Locator{
        return this.page.locator('textarea[rows="5"]')
    }

    successCommunityDetailsNotifications(successMessage:string):Locator{
        return this.page.locator(`//div[contains(text(), "${successMessage}")]`)
    }


    editTaskStatusButton(taskStatusNameForEdit:string): Locator{
        return this.page.locator(`//div[contains(text(), "${taskStatusNameForEdit}")]/following-sibling::div//i[contains(@class, "fa-pencil")]`)
    }

    deleteTaskStatusButton (taskStatusNameForDeletion:string): Locator{
        return this.page.locator(`//div[contains(text(), "${taskStatusNameForDeletion}")]/following-sibling::div//i[contains(@class, "fa-times")]`)
    }


    async createNewCommunity(newCommunityName: string):Promise<void>{
        await leftSideMenu.goToManagePage();
        await communitiesList.addCommunityButton.click();
        await this.communityNameField.fill(newCommunityName)
        await this.descriptionField.fill(communityDetailsConst.NEW_COMMUNITY_DESCRIPTION)
        await this.createCommunityButton.click()
    }

    async editCommunityName():Promise<void>{
        await this.communityNameField.fill(communityDetailsConst.UPDATED_COMMUNITY_DETAILS_NAME);
        await this.buttonSaveDetailsCommunity.click();
    }

    async editCommunityDescription():Promise<void>{
        await this.descriptionField.fill(communityDetailsConst.COMMUNITY_DESCRIPTON_EDITED)
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
    async editTaskStatus(taskStatusName:string, newTaskStatusName:string):Promise<void>{
        await this.editTaskStatusButton(taskStatusName).click();
        await this.taskStatusNameFieldForEdit.fill(newTaskStatusName);
        await this.updateTaskStatuButton.click()
    }

    async deleteTaskStatus(taskStatusNameForDeletion:string):Promise<void>{
        await this.deleteTaskStatusButton(taskStatusNameForDeletion).click();
        await this.confirmDeleteButton.click()
    }
    async deleteCommunity(nameOfCommunityForDeletion:string):Promise<void>{
        await communitiesList.getCommunityInTheList(nameOfCommunityForDeletion).click()
        await this.additionalCommunityOptions.click();
        await this.deleteCommunityButton.click();
        await this.confirmDeleteButton.click()
    }
}


