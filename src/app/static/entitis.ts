/*
 * @Author: jader 
 * @Date: 2017-04-13 20:26:41 
 * @Last Modified by: jader
 * @Last Modified time: 2017-04-13 20:31:18
 */
export class Detail {
  id: number
  title: string
  createdAt: string
  tags: string[]
  // readTotal:number
  content: string
  preview: string
}

export interface Image {
  contentUrl: string
  name: string
}

export interface Color {
  value: string
  name: string
  url: string
}