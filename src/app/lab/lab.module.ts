import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule }   from '@angular/router'
import { CommonModule } from '@angular/common'

import { LabRoutingModule } from './lab-routing.module'

import { LabMainComponent } from './lab-main/lab-main.component'
import { HashGalleryComponent } from './hashgallery/hashgallery.component'
//import { GalleryDirective } from './hashgallery/gallery.directive'
//import { GalleryRandomDirective } from './hashgallery/galleryrandom.directive'


@NgModule({
    imports: [
        FormsModule,       
        CommonModule,
        LabRoutingModule,
    ],
    declarations: [
        LabMainComponent,
        HashGalleryComponent,
      //  GalleryDirective,
      //  GalleryRandomDirective
    ],
    exports: [LabMainComponent]
})
export class LabModule {

}
