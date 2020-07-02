import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BizcategoryComponent } from './bizcategory/bizcategory.component';
import { BizDirectoryComponent } from './biz-directory/biz-directory.component';
import { AddBusinessComponent } from './helper/add-business/add-business.component';
import { IntroComponent } from './intro/intro.component';
import { BizDetailsComponent } from './biz-details/biz-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bizdir'},
  {path: 'bizdir', component: BizDirectoryComponent},
  {path: 'addbiz', component: AddBusinessComponent},
  {path: 'biz/:id', component: BizDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
