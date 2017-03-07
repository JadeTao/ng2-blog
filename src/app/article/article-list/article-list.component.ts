import {Component, OnInit} from '@angular/core'

import {Detail} from '../article-detail/detail'
import {ArticleService} from '../../service/article.service'

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

    constructor(
        private listService: ArticleService,
    ) {}

    private list: Detail[]
    scroll(){
        window.scrollTo(0,0);
    }

    ngOnInit() {
       this.list=this.listService.getList();
       for( let n of this.list ){
           n.preview = n.content.replace(/\#+/g,"").replace(/\>+/g,"").slice(0,200)         //正则提取汉字，提取预览
       }
    }
}
