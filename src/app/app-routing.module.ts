import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BizcategoryComponent } from './bizcategory/bizcategory.component';
import { BizDirectoryComponent } from './biz-directory/biz-directory.component';
import { AddBusinessComponent } from './helper/add-business/add-business.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'bizdir', component: BizDirectoryComponent},
  {path: 'addbiz', component: AddBusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
