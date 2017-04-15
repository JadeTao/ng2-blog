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

    private tip: string = "请输入密码"

    private password: string
    toLoad() {
        this.pwdCheck.loadPwd();
    }
    toCheck() {
        this.password = this.el.nativeElement.querySelector('#pwd').value;
        if (this.pwdCheck.checkPwd(this.password)) {
            this.tip = "welcome";

        } else {
            this.tip = "wrong";
        }
    }
    toClear() {
        this.tip = "请输入密码";
        this.el.nativeElement.querySelector('#pwd').value = "";
    }



    ngOnInit() {

    }
}
