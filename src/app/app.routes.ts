import { RouterConfig } from '@angular/router';
import { NoContent } from './no-content';
import { Login } from "./user/login";
import { UnauthGuard } from "./shared/auth/unauth.guard";
import {HomeRoutes} from "./home/home.routes";

export const routes: RouterConfig = [
  ...HomeRoutes,
  { path: 'login', component: Login, canActivate: [UnauthGuard]},
  { path: '**',    component: NoContent },
];