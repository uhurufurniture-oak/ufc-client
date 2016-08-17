import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {UnauthGuard} from "./unauth.guard";

export * from './auth.service';

export const AUTH_PROVIDERS: any[] = [
  AuthGuard,
  AuthService,
  UnauthGuard
];