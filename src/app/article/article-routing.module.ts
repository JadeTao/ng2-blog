import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleMainComponent } from './article-main/article-main.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component'
import { ArticleListComponent } from './article-list/article-list.component'



const articleRoutes: Routes = [
  { 
        path: '',
        component: ArticleMainComponent,
        children: [
         {
            path:'list',component:ArticleListComponent
         },{
            path:'detail/:id',component:ArticleDetailComponent
         }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/