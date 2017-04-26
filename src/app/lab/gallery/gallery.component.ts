import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Renderer, ElementRef } from '@angular/core';
import { Img } from '../../static/entitis'
import { IMG } from '../../static/mock-img'



@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    providers: []
})
export class GalleryComponent implements OnInit {

    constructor(private el: ElementRef,private renderer:Renderer) {    }
    public list: Img[]=IMG;
    public allphoto
    public therange
    public left:Img[]=[]
    public right:Img[]=[]
 
    randomSort(){
        let arr=this.list;
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
        let _cln = _navele.className;
        let _allnav = this.el.nativeElement.querySelectorAll('.i');
        
        for(let i=0;i<_allnav.length;i++){
            if(/i-current/.test(_allnav[i].className)){
                this.renderer.setElementClass(_allnav[i],'i-current',false);
                this.renderer.setElementClass(_allnav[i],'i-front',false);
                this.renderer.setElementClass(_allnav[i],'i-back',false);
            }
        }
        if(/i-front/.test(_cln)){
            this.renderer.setElementClass(event.target,'i-front',false);
            this.renderer.setElementClass(event.target,'i-back',true);
            this.renderer.setElementClass(event.target,'i-current',true);
        }else{
            this.renderer.setElementClass(event.target,'i-front',true);
            this.renderer.setElementClass(event.target,'i-back',false);
            this.renderer.setElementClass(event.target,'i-current',true);
        }


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
        let range={
            left:{
                x:[],
                y:[]
            },
            right:{
                x:[],
                y:[]
            }
        };
        let wrap={
            w:this.el.nativeElement.querySelector('#wrap').clientWidth,
            h:this.el.nativeElement.querySelector('#wrap').clientHeight
        };
        let photo={
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
        let max=Math.max(range[0],range[1]);
        let min=Math.min(range[0],range[1]);
        let diff=max-min;
        let number=Math.random()*diff+min;
        return number;       
    }

    reposition(nodelist){
        for(let i=0;i<nodelist.length;i++){
            if(Math.random()>0.5000){
                nodelist[i].style.left=this.random(this.therange.left.x)+'px';
                nodelist[i].style.top=this.random(this.therange.left.y)+'px';
            }else{
                nodelist[i].style.left=this.random(this.therange.right.x)+'px';
                nodelist[i].style.top=this.random(this.therange.right.y)+'px';                          
            }
            nodelist[i].style['transform']='rotate('+this.random([-150,150])+'deg)';
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