import { Renderer, Directive, ElementRef, Input, OnInit } from '@angular/core';



@Directive({ selector: '[thewrap]' })
export class GalleryRandomDirective implements OnInit {
    constructor(private el: ElementRef,private renderer:Renderer) { }
    




    private random(range:number[]){
        var max=Math.max(range[0],range[1]);
        var min=Math.min(range[0],range[1]);
        var rand=Math.random()*(max-min)+min;
        return rand;
    }
    
    

    ngOnInit(){

    }
}
