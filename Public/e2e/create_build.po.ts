import { browser, by, element, protractor, $$ } from 'protractor';

export class CreateBuild {
    navigateTo() {
        const navigatbutton = element(by.id('build'));
        navigatbutton.click();
    }

    CreateBuild() {
        // tslint:disable-next-line:max-line-length
        const link = 'https://github.com/Momotoculteur/PimpMyJect/blob/master/README.md';
        const create_build = element(by.id('binput'));
        create_build.click();
        create_build.clear().then(function () {
            create_build.sendKeys(link);
        });
        // tslint:disable-next-line:max-line-length
        const lostfocuselement = element(by.xpath('/html/body/app-root/app-equipes/app-workspace/app-sprint/app-sprintworkspace/app-liste-build/table/thead/tr/th[1]'));
        lostfocuselement.click();
        browser.refresh();
        expect(create_build.getText()).toEqual(link);


    }


}
