
import {RouterConfig} from "@angular/router";
import {Home} from "./home.component";
import {AuthGuard} from "../shared/auth/auth.guard";
import {Dashboard} from "../dashboard/dashboard.component";
import {ListingsComponent} from "../listings/listings.component";

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { 
    path: 'home', 
    component: Home, 
    canActivate: [AuthGuard],
    children: [
      {path: '', component: Dashboard},
      {path: 'listings', component: ListingsComponent}
    ]
  },
];