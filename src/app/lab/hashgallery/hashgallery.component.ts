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
    private allphoto
    private therange
    private left:Img[]=[]
    private right:Img[]=[]
 
    randomSort(){
        var arr=this.list;
        for (let i = arr.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }       
    }

    divide(){
        for(let i =0;i<this.list.length;i++){
            if(i<Math.ceil(this.list.length/2)){
                this.left.push(this.list[i]);
            }else{
                this.right.push(this.list[i]);
            }
        }
    }
    detect(){
        let _allphoto= this.el.nativeElement.querySelectorAll('.photo');
        for(let i=0;i<_allphoto.length;i++){
            if(/photo.back/.test(_allphoto[i].className)){
                this.renderer.setElementClass(_allphoto[i],'photo-back',false);
                this.renderer.setElementClass(_allphoto[i],'photo-front',true);
            }

        }
    }
    turn($event){

        let cln=event.target as HTMLElement;  //这里真是巨坑 2017年3月12日 14:38:01
        if(/photo-front/.test(cln.className)){
            this.detect();
            this.renderer.setElementClass(cln,'photo-front',false);
            this.renderer.setElementClass(cln,'photo-back',true);
        }else if(/photo-back/.test(cln.className)){
            this.renderer.setElementClass(cln,'photo-front',true);
            this.renderer.setElementClass(cln,'photo-back',false);
        }
        //this.reposition(this.allphoto);
    }


    onNav($event){
        let _navele = event.target as HTMLElement;
        let _id = _navele.id;
        let _itsphoto=this.el.nativeElement.querySelector('#photo_'+_id);
        let _photoid=_itsphoto.id;
        if(/photo-front/.test(_itsphoto.className)){
            this.detect();
            this.renderer.setElementClass(_itsphoto,'photo-front',false);
            this.renderer.setElementClass(_itsphoto,'photo-back',true);
        }else{
            this.renderer.setElementClass(_itsphoto,'photo-front',true);
            this.renderer.setElementClass(_itsphoto,'photo-back',false);
        }
        this.reposition(this.allphoto);
        let _allpic=this.el.nativeElement.querySelectorAll('.photo');
        for(let i=0;i<_allpic.length;i++){
            if(/photo-center/.test(_allpic[i].className)){
                this.renderer.setElementClass(_allpic[i],'photo-center',false);
            }
        }
        this.renderer.setElementClass(_itsphoto,'photo-center',true);
    }

    range() {
        var range={
            left:{
                x:[],
                y:[]
            },
            right:{
                x:[],
                y:[]
            }
        };
        var wrap={
            w:this.el.nativeElement.querySelector('#wrap').clientWidth,
            h:this.el.nativeElement.querySelector('#wrap').clientHeight
        };
        var photo={
            w:this.el.nativeElement.querySelector('.photo').clientWidth,
            h:this.el.nativeElement.querySelector('.photo').clientHeight
        };

        range.left.x=[-photo.w/2,wrap.w/2-photo.w/2];
        range.left.y=[-photo.h/2,wrap.h];
        range.right.x=[wrap.w/2+photo.w/2,wrap.w-photo.w/2];
        range.right.y=range.left.y;

        return range;
    }

    random(range){
        var max=Math.max(range[0],range[1]);
        var min=Math.min(range[0],range[1]);
        var diff=max-min;
        var number=Math.random()*diff+min;
        return number;       
    }
    reposition(nodelist){
        for(let i=0;i<nodelist.length;i++){
            if(i<Math.ceil(nodelist.length/2)){
                nodelist[i].style.left=this.random(this.therange.left.x)+'px';
                nodelist[i].style.top=this.random(this.therange.left.y)+'px';
            }else{
                nodelist[i].style.left=this.random(this.therange.right.x)+'px';
                nodelist[i].style.top=this.random(this.therange.right.y)+'px';                
            }
        }        
    }


    ngOnInit(){
        this.randomSort();
        this.divide();
    }
    ngAfterViewInit(){
        this.allphoto=this.el.nativeElement.querySelectorAll('.photo');
        this.therange=this.range();
        this.reposition(this.allphoto);
    }
}