import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article/article.service'
import { Detail } from '../../static/entitis'

@Component({
  selector: 'app-arti',
  templateUrl: './arti.component.html',
  styleUrls: ['./arti.component.scss'],
  providers: [ArticleService]
})
export class ArtiComponent implements OnInit {

  constructor(private listService: ArticleService) { }

  public list: Detail[]
  ngOnInit() {
    this.list = this.listService.getList().slice(0,4)
  }

}