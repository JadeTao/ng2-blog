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
      },
      {
        path: 'gallery', component: GalleryComponent
      },]
  }
];

export const LabRoutes = RouterModule.forChild(routes);
