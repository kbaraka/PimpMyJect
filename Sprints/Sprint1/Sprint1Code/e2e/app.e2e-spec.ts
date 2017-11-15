import { AppPage } from './app.po';
import { Authentification } from './auth.po';
import { Invitation } from './invitation.po';
describe('CDP App', () => {
  let page: AppPage;
  let auth: Authentification;
  let invit: Invitation;

  beforeEach(() => {
    page = new AppPage();
    auth = new Authentification();
    invit = new Invitation();
  });

   it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });

  it('Test scénario d`authentification échoue ', () => {
    auth.navigateTo();
    auth.checkunauth();
  }); 
  it('Test scénario d`invitation avec succes ', () => {
    invit.navigateTo('/login');
    invit.auth();
    invit.AddMember();
  });

  it('Test scénario d`invitation échoue ', () => {
    invit.navigateTo('/login');
    invit.auth();
    invit.noAddMember();
  });
});
