import { Component, OnInit } from '@angular/core'

import { Img } from './img'
import { IMG } from './mock-img'


@Component({
    moduleId:module.id,
    selector: 'hashgallery',
    templateUrl: './hashgallery.component.html',
    styleUrls: ['./hashgallery.component.scss'],
    providers: []
})
export class HashGalleryComponent implements OnInit {

    constructor() {}
    private list: Img[]=IMG;
    ngOnInit(){
        
    }


}