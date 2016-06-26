/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';


/*
* App Component
* our top level component that holds all of our components
*/
import { AppComponent, APP_PROVIDERS } from './app';
import {
  FIREBASE_PROVIDERS, 
  defaultFirebase, 
  firebaseAuthConfig, 
  AuthProviders,
  AuthMethods
} from "angularfire2/angularfire2";

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(AppComponent, [
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: 'AIzaSyARs_f15bn2Zb0yBOB_MifZgufHTRzcY8A',
      authDomain: 'ufc-oak.firebaseapp.com',
      databaseURL: 'https://ufc-oak.firebaseio.com',
      storageBucket: 'ufc-oak.appspot.com'
    }),
    firebaseAuthConfig({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect
    }),
    ...APP_PROVIDERS,
  ])
  .then(decorateComponentRef)
  .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
