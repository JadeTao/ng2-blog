import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabMainComponent } from './lab-main/lab-main.component'
import { HashGalleryComponent } from './hashgallery/hashgallery.component'




const labRoutes: Routes = [
  { 
        path: '',
        component: LabMainComponent,
        children: [
         {
            path:'hashgallery',component:HashGalleryComponent
         },]
    }
];

@NgModule({
  imports: [RouterModule.forChild(labRoutes)],
  exports: [RouterModule]
})
export class LabRoutingModule {}

