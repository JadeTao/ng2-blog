import { Renderer, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';



@Directive({ selector: '[thephoto]' })
export class GalleryDirective implements OnInit {
    constructor(private el: ElementRef,private renderer:Renderer) { }
    

    @HostListener('click') onClick() {
        this.changeClass();
    }

    private changeClass() {
        let cln=this.el.nativeElement.className;
            if(/photo-front/.test(cln)){
                this.renderer.setElementClass(this.el.nativeElement,'photo-front',false);
                this.renderer.setElementClass(this.el.nativeElement,'photo-back',true);
            }else{
                this.renderer.setElementClass(this.el.nativeElement,'photo-front',true);
                this.renderer.setElementClass(this.el.nativeElement,'photo-back',false);
            }
            if(!/photo-center/.test(cln)){
                this.renderer.setElementClass(this.el.nativeElement,'photo-center',true);
            }
    }



    private random(range:number[]){
        var max=Math.max(range[0],range[1]);
        var min=Math.min(range[0],range[1]);
        var rand=Math.random()*(max-min)+min;
        return rand;
    }
    

    ngOnInit(){

    }
}
