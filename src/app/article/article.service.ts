import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'

import {Detail} from '../article/article-detail/detail'
import {ARTICLES} from '../mock-article'

const Showdown:any = require('showdown')


@Injectable()
export class ArticleService {

    getDetails():Promise<Detail[]>{
        return Promise.resolve(ARTICLES);
    }

    getDetail(id: number): Promise<Detail> {
        return this.getDetails()
                    .then(articles => articles.find(article => article.id === id));
    }
    getList(){
        return ARTICLES;
    }

    constructor(){}

    converter = new Showdown.Converter()

}