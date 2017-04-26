import { Site } from './../static/entitis';
import { SITE } from './../static/site';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {

  constructor() { }
  site: Site[] = SITE
  ngOnInit() {
  }

}