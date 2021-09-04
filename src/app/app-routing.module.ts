import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AccountComponent } from "./component/account/account.component";
import { AccountDetailComponent } from './component/account-detail/account-detail.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-detail', component: AccountDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
