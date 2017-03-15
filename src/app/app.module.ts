import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {HashLocationStrategy, LocationStrategy} from '@angular/common'
import { MaterialModule } from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
//import { ArticleListComponent } from './article/article-list/article-list.component'
//import { ArticleDetailComponent } from './article/article-detail/article-detail.component'
import { HeadbarComponent } from './headbar/headbar.component'
import { IntroComponent } from './intro/intro.component'
import { FootbarComponent } from './footbar/footbar.component'
//import { ArticleModule } from './article/article.module'
//import { ArticleMainComponent } from './article/article-main/article-main.component'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    IntroComponent,
    FootbarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
 //   ArticleModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
