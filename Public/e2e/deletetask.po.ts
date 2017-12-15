import { browser, by, element, protractor, Key } from 'protractor';

export class DeleteTask {


    DeleteTask() {
        const to_remove = element(by.
            // tslint:disable-next-line:max-line-length
            xpath('/html/body/app-root/app-equipes/app-workspace/app-sprint/app-sprintworkspace/app-listertache/div/table/tbody/tr[6]/td[8]/a'));
        to_remove.click();
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="TestTest"]'))
            .isPresent()).toBeFalsy();

    }





}
