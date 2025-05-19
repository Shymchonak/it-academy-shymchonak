
export class Login  {

    BASE_URL = "https://staging.pasalo.pro/";
    VALID_EMAIL = "shymnakjob+1000@gmail.com";
    VALID_PASSWORD = "V1@chaslau";
    INVALID_EMAIL = "invalidemail@gmail.com";
    INVALID_PASSWORDS = "InvalidPassword";
    NOTIFICAION_MESSAGE = "something went"
}

export class Urls {
    CUSTOM_FIELDS = '/custom-fields'
    MANAGE = '/communities/manage'
}
export class Dashboard {

    logoutButton = 'Logout'
    POSTED_TASKS = 'Posted task'
    FOR_LOGIN_CHECK = '//div[@class=\'dashboard-header-redesign__top-wrapper\']//div[contains(text(), "Posted tasks")]'
}

export class CommunityDetails {

    COMMUNITY_DETAILS_NAME = 'Community details test'
    UPDATED_COMMUNITY_DETAILS_NAME = 'Community details test UPD'
    NEW_COMMUNITY_DESCRIPTION = 'Some words for new community'
    COMMUNITY_DESCRIPTON_EDITED = 'Totaly new text UPD'
    COMMUNITY_UPDATE = "Community updated!"
    STATUS_CREATED = "Status created!"
    STATUS_UPDATED = "Status updated!"
    STATUS_DELETED = "Status deleted!"
}

export class CustomTaskStatuses {
    COMMUNITY_TASK_STATUS_TEST = 'Task statuses'
    PARENT_STATUS_PENDING = "Pending"
    PARENT_STATUS_INPROGRESS = "In progress"
    PARENT_STATUS_COMPLETED = "Completed"
    COLOR_FOR_PARENT_PENDING = "rgb(0, 202, 249)"
    COLOR_FOR_PARENT_INPROGRESS = "rgb(255, 158, 84)"
    COLOR_FOR_PARENT_COMPLETED = "rgb(0, 128, 0)"
    CUSTOM_TASK_STATUS_PENDING_NAME = "Custom Auto PENDING"
    CUSTOM_TASK_STATUS_PENDING_NAME_EDITED = "Custom Auto PENDING UPD"
    CUSTOM_TASK_STATUS_INPROGRESS_NAME = "Custom Auto INPROGRESS"
    CUSTOM_TASK_STATUS_INPROGRESS_NAME_EDITED = "Custom Auto INPROGRESS UPD"
    CUSTOM_TASK_STATUS_COMPLETED_NAME = "Custom Auto COMPLETED"
    CUSTOM_TASK_STATUS_COMPLETED_NAME_EDITED = "Custom Auto COMPLETED UPD"
}