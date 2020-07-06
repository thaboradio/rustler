import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BizcategoryComponent } from './bizcategory/bizcategory.component';
import { BizDirectoryComponent } from './biz-directory/biz-directory.component';
import { AddBusinessComponent } from './helper/add-business/add-business.component';
import { IntroComponent } from './intro/intro.component';
import { BizDetailsComponent } from './biz-details/biz-details.component';
import { LoginComponent } from './helper/login/login.component';
import { AssetMainComponent } from './asset-main/asset-main.component';
import { AssetsComponent } from './assets/assets.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bizdir'},
  {path: 'bizdir', component: BizDirectoryComponent},
  {path: 'addbiz', component: AddBusinessComponent},
  {path: 'biz/:id', component: BizDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'asset-main', component: AssetMainComponent},
  {path: 'asset-list/:id', component: AssetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
