import { ArticleComponent } from './article.component';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailComponent } from './article-detail/article-detail.component'
import { ArticleListComponent } from './article-list/article-list.component'
const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: '', component: ArticleListComponent
      }, {
        path: 'detail/:id', component: ArticleDetailComponent
      }]
  }
];

export const ArticleRoutes = RouterModule.forChild(routes);
