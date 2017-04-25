import { MdlModule } from '@angular-mdl/core';
import { ArticleListComponent } from './../article/article-list/article-list.component';
import { ArticleRoutes } from './article.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ArticleRoutes,
    MdlModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ]
})
export class ArticleModule { }