import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Image } from '../static/entitis';

@Injectable()
export class IndexService {

    imageUrl: string;
    headers = new Headers({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'b31e9d27a4ad4a5d809b3a92238ea18d'
    });

    constructor(private http: Http) {
        const q = '天空+墙纸';
        const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v5.0/images/search`;
        this.imageUrl = baseUrl + `?q=${q}&count=10&mkt=zh-CN&imageType=Photo&size=Large`;
    }

    getImageUrl(): Observable<Image[]> {
        return this.http.get(this.imageUrl, { headers: this.headers })
            .map(res => res.json().value as Image[])
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}