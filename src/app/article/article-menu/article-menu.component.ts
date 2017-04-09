import { Component, OnInit } from '@angular/core'
import { ElementRef } from '@angular/core';
import { PwdcheckService } from '../pwdcheck.service'

@Component({
    selector: 'article-menu',
    templateUrl: './article-menu.component.html',
    styleUrls: ['./article-menu.component.scss'],
    providers: [PwdcheckService]
})
export class ArticleMenuComponent implements OnInit {

    constructor(
        private pwdCheck: PwdcheckService,
        private el: ElementRef
    ) { }

    private tip: string
    private visi: string = "hidden"
    toCheck($event) {
        let pwd = this.el.nativeElement.querySelector('#pwd').value;
        if (this.pwdCheck.checkpwd(pwd)) {
            this.tip = "welcome";
            this.visi = "visible";
        } else {
            this.tip = "wrong";
            this.visi = "visible";
        }
        console.log(pwd);
    }



    ngOnInit() {

    }
}
