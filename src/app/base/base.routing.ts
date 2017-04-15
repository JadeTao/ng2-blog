import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '', component: IntroComponent, outlet: 'preview'
      }]
  }
]

export const BaseRoutes = RouterModule.forChild(routes);
