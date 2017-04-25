import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  private tab: any = {
    tab0: true,
    tab1: false
  }
  private button:HTMLElement[]

  changeTab(arg) {
    arg == 0 ? this.tab = { tab0: true, tab1: false } : this.tab = { tab0: false, tab1: true }
    this.renderer.setElementClass(this.button[0],'bottom',false)
    this.renderer.setElementClass(this.button[1],'bottom',false)
    this.renderer.setElementClass(this.button[arg],'bottom',true)
  }
  ngOnInit() {
    this.button = this.el.nativeElement.querySelectorAll('button')
    this.renderer.setElementClass(this.button[0],'bottom',true)
  }

}
