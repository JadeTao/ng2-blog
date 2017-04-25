import { Component, OnInit } from '@angular/core'
import { Lab } from '../../static/entitis'
import { LAB } from '../../static/lab'


@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss']
})
export class LabListComponent implements OnInit {

  constructor() { }
  list: Lab[] = LAB
  ngOnInit() {
  }

}