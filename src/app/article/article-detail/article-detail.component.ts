import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import 'rxjs/add/operator/switchMap';

import { ArticleService } from '../article.service'
import { Detail } from '../../static/entitis'

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.scss'],
    providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {

    constructor(
        private detailService: ArticleService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    private article: Detail;
    private content: any;
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.detailService.getDetail(+params['id']))
            .subscribe((article: Detail) => {
                this.article = article;
                this.content = this.detailService.converter.makeHtml(this.article.content);
            });
    }

}