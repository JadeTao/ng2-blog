import { Component, OnInit } from '@angular/core'
import { Detail } from '../../static/entitis'
import { ArticleService } from '../article.service'


@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

    constructor(
        private listService: ArticleService,
    ) { }

    public list: Detail[]
    public div: HTMLElement
    scroll() {        
        
    }

    ngOnInit() {
        this.list = this.listService.getList();
        for (let n of this.list) {
            n.preview = n.content.replace(/\#+/g, "").replace(/\>+/g, "").replace(/\((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?\)/g, '').slice(0, 200)         //正则提取汉字，提取预览
        }

    }
}
