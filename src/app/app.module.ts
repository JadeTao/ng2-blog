import { BaseModule } from './base/base.module';

import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component'
import { HeadbarComponent } from './headbar/headbar.component'
import { IndexComponent } from './index/index.component'
import { FootbarComponent } from './footbar/footbar.component'
import { AppRoutingModule } from './app-routing.module'
import { MdlModule } from '@angular-mdl/core'


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    IndexComponent,
    FootbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    AppRoutingModule,
    BaseModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
