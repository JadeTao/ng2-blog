import { abstract } from './../../static/douyu';
import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import 'echarts/theme/dark';
import 'echarts/theme/infographic';
import 'echarts/theme/macarons';
import 'echarts/theme/roma';
import 'echarts/theme/shine';
import 'echarts/theme/vintage';

@Component({
  selector: 'app-douyu',
  templateUrl: './douyu.component.html',
  styleUrls: ['./douyu.component.scss']
})
export class DouyuComponent implements OnInit {

  constructor() { }
  origin = abstract
  data
  x = []
  y = []
  option :EChartOption = {
    title: {
      text: '斗鱼某房间弹幕等级统计',
      subtext: '信息来源于自采的33400条弹幕信息，多来于夜间'
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: this.x
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'line',
        data: this.y,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  };
  ngOnInit() {
    this.data = JSON.parse(abstract)
    this.x = this.option.xAxis[0].data =  Object.keys(this.data).sort((a, b) => { return +a - +b })
    this.x.forEach(value => {
      this.y.push(this.data[value])
    })
  }

}