import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//import { ArticleListComponent } from './article/article-list/article-list.component'
//import { ArticleDetailComponent } from './article/article-detail/article-detail.component'
import { HeadbarComponent } from './headbar/headbar.component'
import { IntroComponent } from './intro/intro.component'
import { FootbarComponent } from './footbar/footbar.component'
//import { ArticleModule } from './article/article.module'
//import { ArticleMainComponent } from './article/article-main/article-main.component'

const routes: Routes = [
    { 
        path: 'home',
        component: IntroComponent
    },   
    {
        path:'article',
        loadChildren:'app/article/article.module#ArticleModule',
        data:{preload:false}
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: '/home',

    }
   
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true} ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}