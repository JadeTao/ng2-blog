import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule }   from '@angular/router'
import { CommonModule } from '@angular/common'

import { LabRoutingModule } from './lab-routing.module'

import { LabMainComponent } from './lab-main/lab-main.component'
import { HashGalleryComponent } from './hashgallery/hashgallery.component'
import { GalleryDirective } from '../directive/gallery.directive'


@NgModule({
    imports: [
        FormsModule,       
        CommonModule,
        LabRoutingModule,
    ],
    declarations: [
        LabMainComponent,
        HashGalleryComponent,
        GalleryDirective
    ],
    exports: [LabMainComponent]
})
export class LabModule {

}
