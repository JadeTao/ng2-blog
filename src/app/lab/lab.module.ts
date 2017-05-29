import { FormsModule } from '@angular/forms';
import { DouyuModule } from './douyu/douyu.module';
import { MdlModule } from '@angular-mdl/core';
import { LabRoutes } from './lab.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabComponent } from './lab.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { TodoComponent } from './todo/todo.component';




@NgModule({
  imports: [
    CommonModule,
    LabRoutes,
    MdlModule,
    DouyuModule,
    FormsModule
  ],
  declarations: [
    LabComponent,
    GalleryComponent,
    LabListComponent,
    TodoComponent
]
})
export class LabModule { }