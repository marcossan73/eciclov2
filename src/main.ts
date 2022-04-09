import { Application } from '@nativescript/core'
import { AppSync, InstallMode, SyncStatus } from 'nativescript-app-sync';
// 'import * as application from "tns-core-modules/application"

Application.on(Application.resumeEvent, () => {
AppSync.sync({
  deploymentKey: 'xpwXBDu64o146h8OUTDT1UhTNm3IY6pFtQr3N',

  installMode: InstallMode.ON_NEXT_RESTART,

  mandatoryInstallMode: InstallMode.IMMEDIATE,

  updateDialog: {
    updateTitle: 'Please restart the app',
    optionalUpdateMessage: 'APP Update',
    mandatoryUpdateMessage: 'Your APP will be updated in the next start!',
    optionalIgnoreButtonLabel: 'Later',
    mandatoryContinueButtonLabel: 'Restart now',
    appendReleaseDescription: true
  }
});
});


Application.run({ moduleName: 'app-root/app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
