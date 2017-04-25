import { AboutComponent } from './about/about.component';
import { ArtiComponent } from './arti/arti.component';
import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '', component: IntroComponent,
      }, {
        path: 'article', component: ArtiComponent,
      }, {
        path: 'about', component: AboutComponent
      }]
  }
]

export const BaseRoutes = RouterModule.forChild(routes);
