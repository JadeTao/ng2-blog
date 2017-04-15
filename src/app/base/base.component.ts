import { Component, Input, Inject, OnInit, style } from '@angular/core';

import { Color } from '../static/entitis'

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

 base: string = "http://om1o3l1z1.bkt.clouddn.com/"
  colors: Color[] = [
    { value: "#F8C3CD", name: "退红", url: this.base + "F8C3CD.png" },
    { value: "#E83015", name: "猩猩绯", url: this.base + "E83015.png" },
    { value: "#D75455", name: "铅丹", url: this.base + "D75455.png" },
    { value: "#B47157", name: "唐茶", url: this.base + "B47157.png" },
    { value: "#434343", name: "消灰", url: this.base + "B481BB.png" },
    { value: "#B481BB", name: "红藤", url: this.base + "B481BB.png" },
    { value: "#577C8A", name: "舛花", url: this.base + "577C8A.png" },
    { value: "#7DB9DE", name: "勿忘草", url: this.base + "7DB9DE.png" },
    { value: "#81C7D4", name: "水", url: this.base + "81C7D4.png" },
    { value: "#5DAC81", name: "若竹", url: this.base + "5DAC81.png" },
    { value: "#A96360", name: "苏芳香", url: this.base + "A96360.png" },
    { value: "#554236", name: "黑鸢", url: this.base + "554236.png" },
    { value: "#FB9966", name: "深支子", url: this.base + "FB9966.png" },
    { value: "#563F2E", name: "焦茶", url: this.base + "563F2E.png" },
    { value: "#F6C555", name: "栀子", url: this.base + "F6C555.png" },
    { value: "#FBE251", name: "黄檗", url: this.base + "FBE251.png" },
    { value: "#62592C", name: "海松茶", url: this.base + "62592C.png" },
    { value: "#6A4C9C", name: "桔梗", url: this.base + "6A4C9C.png" },
    { value: "#33A6B8", name: "浅葱", url: this.base + "33A6B8.png" },
    { value: "#C1328E", name: "牡丹", url: this.base + "C1328E.png" },
    { value: "#6F3381", name: "菖蒲", url: this.base + "6F3381.png" },
    { value: "#622954", name: "杜若", url: this.base + "622954.png" },
    { value: "#533D5B", name: "滅紫", url: this.base + "533D5B.png" },
    { value: "#005CAF", name: "瑠璃", url: this.base + "005CAF.png" },
    { value: "#2EA9DF", name: "露草", url: this.base + "2EA9DF.png" }
  ]
  color: Color

  constructor() { }

  rotateColor(args: any) {
    if (args !== "stop") {
      const length = args.length
      const time = 6500
      var colorChange = setInterval(() => {
        this.color = this.colors[Math.floor(Math.random() * length)]
      }, time)
    } else{
      clearInterval(colorChange)
      console.log("stop")
    }

  }

  tem(){
    console.log('temp')
  }

  getRandom(length) {
    return Math.floor(Math.random() * length)
  }

  ngOnInit() {
    this.rotateColor(this.colors)
    this.color = this.colors[this.getRandom(this.colors.length)]
  }
}