import { browser, by, element, protractor, $$ } from 'protractor';

export class Priorite {

    changerpriorité() {
        // tslint:disable-next-line:max-line-length
        const randomprio = Math.floor(Math.random() * 90);
        const targetprio = element(by.xpath('/html/body/app-root/app-equipes/div/app-workspace/div[2]/app-backlog/div/app-list-user-story/div/table/tbody/tr[1]/td[4]'));
        targetprio.click();
        targetprio.clear().then(function () {
            targetprio.sendKeys(randomprio);
        });
        // tslint:disable-next-line:max-line-length
        const lostfocuselement = element(by.xpath('/html/body/app-root/app-equipes/div/app-workspace/div[2]/app-backlog/div/app-list-user-story/div/table/tbody/tr[1]/td[3]'));
        lostfocuselement.click();
        browser.refresh();
        expect(targetprio.getText()).toEqual(randomprio.toString());


    }


}
