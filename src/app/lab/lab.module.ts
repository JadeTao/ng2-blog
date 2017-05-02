import { TodoModule } from './todo/todo.module';
import { DouyuModule } from './douyu/douyu.module';
import { MdlModule } from '@angular-mdl/core';
import { LabRoutes } from './lab.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabComponent } from './lab.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LabListComponent } from './lab-list/lab-list.component';




@NgModule({
  imports: [
    CommonModule,
    LabRoutes,
    MdlModule,
    DouyuModule,
    TodoModule
  ],
  declarations: [
    LabComponent,
    GalleryComponent,
    LabListComponent
]
})
export class LabModule { }