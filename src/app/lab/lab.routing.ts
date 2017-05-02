import { DouyuComponent } from './douyu/douyu.component';
import { TodoComponent } from './todo/todo.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LabComponent } from './lab.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LabComponent,
    children: [
      {
        path: '', component: LabListComponent
      }, {
        path: 'gallery', component: GalleryComponent
      }, {
        path: 'todo', component: TodoComponent
      }, {
        path: 'douyu', component: DouyuComponent
      },]
  }
];

export const LabRoutes = RouterModule.forChild(routes);
