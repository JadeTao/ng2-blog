import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Renderer, ElementRef } from '@angular/core';
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

    constructor(private el: ElementRef,private renderer:Renderer) {    }
    private list: Img[]=IMG;
    private w
    private temp
 
    randomSort(){
        var arr=this.list;
        for (let i = arr.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
       
    }



    ngOnInit(){
        this.randomSort();
    }
    ngAfterViewInit(){
        this.w=this.el.nativeElement.querySelector('#wrap')
        console.log(this.w.clientWidth+'_'+this.w.clientHeight);
        this.temp=this.el.nativeElement.querySelectorAll('.photo');
        console.log(this.temp)
    }
}