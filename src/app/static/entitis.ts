/*
 * @Author: jader 
 * @Date: 2017-04-13 20:26:41 
 * @Last Modified by: jader
 * @Last Modified time: 2017-04-25 22:01:44
 */
export interface Detail {
  id: number
  title: string
  createdAt: string
  tags: string[]
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

export interface Img {
  id: number
  src: string
  title: string
  caption: string
  desc: string
}

export interface Lab {
  id: number
  title: string
  icon: string
  route: string
  desc: string
}

export interface Site {
  id: number
  title: string
  height: string
  photo: string  
  url: string
  desc: string
}
export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}