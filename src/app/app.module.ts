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
import { IntroComponent } from './intro/intro.component';
import { BizDetailsComponent } from './biz-details/biz-details.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LoginComponent } from './helper/login/login.component';
import { AssetMainComponent } from './asset-main/asset-main.component';
import { AssetsComponent } from './assets/assets.component';
import { ContributeComponent} from './contribute/contribute.component';
import { ConfirmComponent } from './helper/confirm/confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    BizDirectoryComponent,
    BizcategoryComponent,
    AddBusinessComponent,
    IntroComponent,
    BizDetailsComponent,
    LoginComponent,
    AssetMainComponent,
    AssetsComponent,
    ContributeComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
