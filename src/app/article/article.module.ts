import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component'
import { ArticleMainComponent } from './article-main/article-main.component'

import { ArticleRoutingModule } from './article-routing.module'

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        ArticleRoutingModule,
    ],
    declarations: [
        ArticleDetailComponent,
        ArticleListComponent,
        ArticleMainComponent
    ],
    exports: [ArticleMainComponent]
})
export class ArticleModule {

}
