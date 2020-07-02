import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BizDirectoryComponent } from './biz-directory/biz-directory.component';
import { BizcategoryComponent } from './bizcategory/bizcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBusinessComponent } from './helper/add-business/add-business.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    BizDirectoryComponent,
    BizcategoryComponent,
    AddBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
