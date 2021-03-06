import { Detail } from './entitis'
export let ARTICLES: Detail[] = [
	{
		id: 7, title: '严肃的闭包定义', createdAt: '2017年5月10日', tags: ['原生', '闭包'], preview: '', content: `为什么写这篇文章：网上关于闭包的解释五花八门，很多人自己往往也未清楚闭包，就尝试用蹩脚的语言去描述它，所以我整理一下关于闭包的一些权威的资料。下面的资料有一些有趣的分歧，如果你发现了并且有兴趣与我探讨一下，欢迎联系我。
### 一、MDN
英文版：
Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.
中文版：
Closures (闭包)是使用被作用域封闭的变量，函数，闭包等执行的一个函数的作用域。通常我们用和其相应的函数来指代这些作用域。(可以访问独立数据的函数)

闭包是指这样的作用域，它包含有一个函数，这个函数可以调用被这个作用域所*封闭*的变量、函数或者闭包等内容。通常我们通过闭包所对应的函数来获得对闭包的访问。
###二、IBMdeveloperworks
闭包并不是什么新奇的概念，它早在高级语言开始发展的年代就产生了。闭包（Closure）是词法闭包（Lexical Closure）的简称。对闭包的具体定义有很多种说法，这些说法大体可以分为两类：
一种说法认为闭包是符合一定条件的函数，比如参考资源中这样定义闭包：闭包是在其词法上下文中引用了自由变量(注1)的函数。
另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。比如参考资源中就有这样的的定义：在实现深约束(注2)时，需要创建一个能显式表示引用环境的东西，并将它与相关的子程序捆绑在一起，这样捆绑起来的整体被称为闭包。
这两种定义在某种意义上是对立的，一个认为闭包是函数，另一个认为闭包是函数和引用环境组成的整体。虽然有些咬文嚼字，但可以肯定第二种说法更确切。闭包只是在形式和表现上像函数，但实际上不是函数。函数是一些可执行的代码，这些代码在函数被定义后就确定了，不会在执行时发生变化，所以一个函数只有一个实例。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。所谓引用环境是指在程序执行中的某个点所有处于活跃状态的约束所组成的集合。其中的约束是指一个变量的名字和其所代表的对象之间的联系。那么为什么要把引用环境与函数组合起来呢？这主要是因为在支持嵌套作用域的语言中，有时不能简单直接地确定函数的引用环境。这样的语言一般具有这样的特性：
函数是一阶值（First-class value），即函数可以作为另一个函数的返回值或参数，还可以作为一个变量的值。
函数可以嵌套定义，即在一个函数内部可以定义另一个函数。
###三丶历史上闭包的第一次定义
闭包这个概念第一次出现在1964年的《The Computer Journal》上，由P. J. Landin在《The mechanical evaluation of expressions》一文中提出了applicative expression和closure的概念。
文中AE的概念定义如下：
>We are, therefore, interested in a class of expressions about any one of which it is appropriate to ask the following questions:
Q1. Is it an identifier? If so, what identifier?
Q2. Is it a λ-expression? If so, what identifier or identifiers constitute its bound variable part and in what arrangement? Also what is the expression constituting its λ-body?
Q3. Is it an operator/operand combination? If so, what is the expression constituting its operator? Also what is the expression constituting its operand?
We call these expressions applicative expressions (AEs).

在AE的基础上，闭包定义为:
>Also we represent the value of a λ-expression by a bundle of information called a "closure", comprising the λ-expression and the environment relative to which it was evaluated. We must therefore arrange that such a bundle is correctly interpreted whenever it has to be applied to some argument. More precisely:
a closure has an environment part which is a list whose two items are:
(1) an environment
(2) an identifier or list of identifiers
and a control part which consists of a list whose sole item is an AE.`},
	{
		id: 6, title: '深复制、浅复制以及Immutable初窥', createdAt: '2017年4月20日', tags: ['原生', 'jQuery'], preview: '', content: `### 堆(heap)和栈(stack)
JavaScript的数据类型分为原始数据类型和引用数据类型，原始数据类型有number、string、null、undefined、boolean和symbol(ES6)，储存在栈内存中；引用数据类型有function、object、array，储存在堆内存中。此外，堆内存中还储存着引用数据类型的引用变量。       
原始数据类型之间的传递是**传值**的，引用数据类型之间的传递是**传址**的。用简单的代码说明一下：


	let pri_1 = 1       //在栈内存中创建一块区域保存pri_1，其只为1
	let pri_2 = pri_1   //在栈内存中创建一块区域保存pri_2，
	                    //将pri_1的值传给它
	pri_1 += 1          //pri值增加
	console.log(pri_1)  //2
	console.log(pri_2)  //1，此时pri_2与pri_1无关，两个各有自己的值

	let ref_1 = {}        //在堆内存中创建一块区域保存空对象，
	                      //在栈内存中创建一块区域保存这个空对象的引用
	                      //此时ref_1保存这这个空对象的地址
	let ref_2 = ref_1     //在栈内存中创建一块区域保存ref_2,
	                      //将ref_1保存的地址传递给它,
	                      //此时两者指向同一个地址
	ref_1.prop = "normal" //为空对象新增一个属性
	console.log(ref_1.a)  //"normal"
	console.log(ref_2.a)  //"normal"很明显看出ref_1和ref_2指向相同
			

### 深复制和浅复制
在实际编程过程中，比如说状态管理时，我们需要获得引用数据类型的一份拷贝，如何实现呢？
我们先定义一个对象mainStream，用来储存状态及变化，对象subStream是mainStream某一时刻的切片，下面讨论几种方法获取subStream
#### 1. let subStream = mainStream
如果你有仔细看第一段内容，很容易就会发现这是错的。随着mainStream的变化，subStream也在变动。
#### 2. 遍历mainStream，把key和value一一复制给subStream
看起来没问题，而且让我想起了Array.prototype.slice()方法，去查查[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)：
>slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
如果该元素是个对象引用 （不是实际的对象）， 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
Object.assign()也是浅复制

问题来了，如果mainString的某个属性保存的是一个引用数据类型，我们又回到了问题1，如何解决？
#### 3.遍历mainStream，对每个value进行类型检测，如果是原始数据类型，直接复制，如果是是引用数据类型，则进行深度遍历
好了，问题解决。
多说一句，这里的类型检测 typeof操作符足以胜任，但如果想具体判断数据类型，可以用Object.prototype.string.call()，这个方法会返回对象内部的[[class]]属性，对应着每种具体数据类型。JQuery的"class2type"属性就是用了这种方法。

###JQuery如何实现深复制浅复制
源码有点长，就不贴出来了。
建议[点这里](https://github.com/JadeTao/jQuery-annotation/blob/master/core.js)看看我注解的JQuery源码的core模块，139行。

###聊一下Immutable
Immutable Data是指一旦被创造后，就不可以被改变的数据。当它发生变化时，应该返回一个新的对象，而不是像JS的引用数据类型那样在本身进行修改。通过使用Immutable Data，可以让我们更容易的去处理缓存、回退、数据变化检测等问题，简化我们的开发。

JavaScript的原始数据类型（string number）就是 Born as Immutable Data的，但它们太单薄了，没什么意义，我们在进行状态管理时需要 Immutable Dataset，比如object，array，set，map等。
通过自行封装的deep copy函数，我们可以简单地模拟immutable结构，但性能太差，时间复杂度最优O(n)，最差O(n2)。

JavaScript没有原生支持immutable数据结构，但在这种情况下总会有第三方类库站出来——Immutable.js，Immutable的实现有些像链表，添加一个新结点把旧结点的父子关系转移到新结点上，性能提升很多。它提供了七种不可变数据结构和丰富的api。 有了Immutable.js和Rxjs（操作数据流），js可以向Function programming和 Reactive Programming靠得更近。`
	}, {
		id: 5, title: 'JavaScript继承的五种方法', createdAt: '2017年4月12日', tags: ['原生', '继承'], preview: '', content: `平常写JS几乎很难接触到继承，但JS又是一门OOP的语言，继承不可或缺，因此我整理了常用的继承方法。内容参考了阮一峰的相关文章。

我们有一个父类，


    function Father() {
        this.family = 'Animal'
    }

有一个子类，使其继承父类

    function Child(title,color) {
        this.title = title
        this.color = color
    }

#### 1.构造函数绑定

    function Child(title,color) {
        Father.apply(this,arguments)
        this.title = title
        this.color = color
    }
    
    let tom = new Child('tom','brown')
    tom.family //"Animal"


#### 2.prototype模式
重新赋值了Child.prototype

     Child.prototype = new Father()
     //此时Child.prototype.constructor为 Father，需修正
     Child.prototype.constructor = Child
     
     let tom = new Child('tom','brown')
     tom.family  //"Animal"


#### 3.直接继承

//改写

    function Father(){ }
    Father.prototype.species = "Animal"
    
    Child.prototype = Father.prototype
    Child.prototype.constructor = Child
    
    let tom = new Child('tom','brown')
    tom.family  //"Animal"

效率比较高，直接指向引用，但是对\`Child.prototype\`的修改会直接影响\`Father.prototype\`。并且\`Child.prototype.constructor = Cat\`也改掉了\`Father.prototype\`的\`constructor\`

#### 4.利用空对象作为中介

    let F = function(){}
    F.prototype = Father.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child

消除3的弊端

#### 5.拷贝继承
将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
这里又可以引申出深拷贝和浅拷贝，详见我另一篇文章。`
	}, {
		id: 4, title: '阿里的一道编程测验', createdAt: '2017年3月10日', tags: ['面试', '设计模式'], preview: '', content: `
前天投了阿里的暑期实习前端岗位，按流程我被要求做一道编程测验，题目如下
![这里](http://om1o3l1z1.bkt.clouddn.com/ali.png)
当时限时30min，结点判定和递归方面没处理好，所以今天特地拿出时间整理了一下。
###先贴整理好的代码

   	//主体
	function printProp(obj, chain) {
		let arr = chain.split('.');
		console.log(arr);
		let len = arr.length;
		if (len == 1) {
			return obj[chain];
		} else {
			let objnext = obj[arr.shift()];
			let chainnext = arr.join('.');
			if (obj.hasOwnProperty(objnext)) {
				return printProp(objnext, chainnext);
			} else {
				return undefined;
			}
		}
	}
    //用来测试的对象
    let obj = {
	name: 'jader',
	skills: {
		html: 7,
		css: 6,
		js: 8,
		other: {
			ng: 4,
			scss: 4
	            etc: etc
		}
	}
}
###思路分析


当chain直接是对象的第一级子节点时，比如

	printProp(obj,'name')
可以直接这样获取:

	return obj[name]
但如果chain包含多级子节点时，比如
	
	printProp(obj,'skills.other.ng')
而在JavaScript是不支持obj[skills.other.ng]这种输出方式的，我们需要另寻他路，毫无疑问，应当选择**递归**，判断chain是否包含子结点，否，则直接输出该属性值,是，则以chain中的第一个字结点为下一次递归的obj对象，以chain的其余部分为下一次递归的chain。
大致思路如此，细节部分使用了

	Array.prototype.shift();
	Array.prototype.join();
	String.prototype.split();

不再赘述。

**现在想想也不难，当时卡在递归和结点判断的坑里实在不应该。**

###题外之话
最近在看jQuery的源码和设计模式，心里一直觉得阿里的这道题有种设计模式的味道，但找来找去发现没有一种是贴切的。设计模式是抽象层的代码思想，没有足够的代码量实在无法驾驭，所以开始强迫自己写些东西，放到这个博客的lab里。第一个项目是将一个CSS3+原生JavaScript的散列画廊重构移植到NG框架里，一方面加深自己对NG的掌握，一方面有朝一日把它抽象成插件，贡献到NG社区，也算是对NG推广的微弱贡献吧。`}
	, {
		id: 3, title: 'Node.js编程与异步控制', createdAt: '2017年3月5日', tags: ['前端', 'NodeJS'], preview: '', content: `
#### 前言：
本文章的内容围绕我的这个项目展开,[Github地址](https://github.com/JadeTao/MarkDown-img-helper)。

### 需求
日前写MarkDown时，需要插入本地的图片。往常的做法是将图片上传到第三方图床，然后回到MarkDown，将对应url按照语法插入到文章中。这样操作未免太过繁琐，所以索性写一个NodeJS脚本自动进行批量操作。

### 前期准备
- 七牛云对象存储服务，作为图床。
- Nodejs&npm，作为开发环境。

### 开发过程
1. 七牛云为Node.JS开发提供了丰富的[官方SDK和API](https://developer.qiniu.com/kodo/sdk/nodejs)，在本项目中，只用到了文件上传服务。作为npm的使用者，下载SDK是不明智的。我选择了使用npm安装qiniu包。

		创建一个文件夹，在目录里执行下列命令
		
		npm init
		//为项目生成一个package.json，管理版本、依赖、license、git等		
		
		npm install qiniu --save
		//安装包，并作为依赖写入package.json
		
2. 新建upload.js，我们所有的程序和逻辑都将在这里展开。

	NodeJS遵循CommonJS规范对模块进行同步加载，因此要在代码的最开始进行模块加载。
		
		let qiniu = require('qiniu');   
		//默认后缀为.js		
		
		let fs = require('fs'); 
		 //fs即file system，由NodeJS提供，用于操作文件

	配置权限，与七牛云仓库对接
	
		//配置！
		qiniu.conf.ACCESS_KEY = "Access Key "
		qiniu.conf.SECRET_KEY = "Secret Key"
		bucket = "要上传的空间名"//要上传的空间名
		bucketUrl = "七牛云通用域名"
		resultFile = "./url.txt"  //用于储存最后生成的url
		localFile = __dirname + "/img"  //用于储存要上传的文件

	主逻辑部分不贴了。简单阐述一下流程：
			
			 fs.readdir(path, [callback(err,files)])
	使用fs.readdir对img文件夹进行异步读取，在回调函数内对存储着img内所有文件的files数组遍历、上传，每次循环内生成每个文件特有的up token，根据这个uptoken使用qiniu提供的上传api来上传文件，上传成功后将url写入url.txt,并删除对应文件。

### 异步流程控制
	
梳理一下，列出异步过程框架：
	
		fs.readdir{
			遍历循环体{
			//我将上传和文件的读写删除封装进了同一个函数内
				封装处理{  
					上传;
					url写入;
					文件删除;
				}
			}
		}
可见，文件夹的读写是异步的，遍历过程是异步的，即对文件夹内一个文件的封装处理操作未结束时，便开始处理下一个文件。
在初次开发时，我并没有注意到这个问题，导致url.txt文件内的url序列跟自然文件不同，那如何解决呢？
#### 引入[Async.js](http://caolan.github.io/async/)
Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. It is originally designed for use with Node.js and installable via 

		npm install --save async
	
Async提供了解决对集合的异步流程控制的有效解决方法——[Async.eachOfSerise](http://caolan.github.io/async/docs.html#eachOfSeries)。
这个函数将集合内的并行异步改为串行，保证对img文件夹内每个文件的操作是按顺序来的。
好了，问题解决。


p.s.技术文章真的难写。`},
	{
		id: 2, title: '关于这个博客的一些说明', createdAt: '2017年2月28日', tags: ['前端', 'angular'], preview: '', content: `
### 基本介绍
这是一个基于Angular JS 2.0+的单页应用(SPA)。
>####亮点
>-NG2,及脚手架[angular-cli](https://github.com/angular/angular-cli)   
>-SCSS   
>-支持MarkDown   
> .etc   
> 

代码托管在[Github](https://github.com/JadeTao/ng2-blog.git)上，欢迎fork & star。

### 开发历程
一切从2017年初的寒假开始。这个假期，年前，理论方面我读了[《你不知道的JavaScript》](https://github.com/getify/You-Dont-Know-JS.git)的上卷一部分，以及[《图解HTTP》](https://book.douban.com/subject/25863515/)，实战方面切了微信小程序的几个简单的页面。年后，重读了红宝书[《JavaScript高级程序设计》](https://book.douban.com/subject/10546125/)的JS部分，获益匪浅。NG2方面，跟一个朋友重构一个VueJS的项目，后来因为他的城市NG2岗位不多，所以他叛教去学React了，重构项目也荒废了下来。因此我萌生了写一个自己的NG2博客的想法。

博客诞生于2016年2月10日。2月24日上线beta版本。开发期间参考了官方文档和github上的优秀开源代码，谷歌和StackOverflow在我踩坑填坑时给予了莫大的帮助。

### 项目后续
目前博客的功能极度不完善，仅有文章展示功能，css样式也非常幼稚。但归功于NG2良好的文件结构和组织方式，本项目的可扩展性和可维护性非常强。以后开发的组件添加进AppModule即可。
> #### todo-list
> -tag归档   
> -页面逻辑整合   
> -优雅降级   
> -文章更新   
> -页面性能提升（CDN，gzip，uglify）   
> -开发nodejs后台   

任重而道远。

`},
	{
		id: 1, title: '走过秋天的一刻钟', createdAt: '2017年2月14日', tags: ['随笔', '杂志'], preview: '', content:
		`错过第一台车不是我们的错，隔着校门我们看着七路车缓缓驶过。第二台车停站的时候我们没有挤上去。然后我们望着远处的松树等待第三台车的到来。一阵微风过后月亮突然浮现在我们身后的天边，两侧的路灯骤然亮起。

“还是走着回去吧。”我提议道。

尽管她已听从我的劝告，可她还是不情愿地转身看了看站牌。

“别看啦，也就三站地。”我拽着她的书包沿着路边的落叶向下走去。向南而过的风吹过我们的耳朵发出低吟般的响声，她张开双臂试图收拢被风扬起的头发。我们一句话也没有说。在将近三个月的时间里我总是在一些不经意的场合里错以为机会走到了我面前，却没有一次将心里的念头讲出口过。而这一次或许机会真的来了，我默默掐算着，可以走一刻钟的路程，假如我们说上五十句话，总该夹杂着两句我想说的吧。

“咦？”她用不知从哪变出来的头绳把头发扎起来了，她问我：“你家不是在上面吗，不回家啦？”

“我今天去我舅舅家。”舅舅？我姥姥辛苦了一辈子，徒增了四个女儿，在我四姨出生之后反而是我姥爷放弃了继续生育的打算，可能是他已无法忍受家里再出现第五个丫头对他的打击。“离你那不算远，再走一刻钟就差不多了。”再走一刻钟是我从她家走回校门口，随后等十一路快点回家。

“那就算是你送我回家喽。”她说。

我们又陷入了无语的荒原，我开始构思自己的开场白：其实……我一直挺……不行，这太直接了；我们认识了多久了？这还用问？从上初一那天算，两年零三个月，不然就用海涅的诗开头吧。

“天气预报说今天会下雪。”她说，“一下雪秋天就过去了，这个秋天我总觉得特不舒服。”

“已经连续三天都说要下雪了，看来他们也只能呼风唤雨，对雪却一点办法也没有。”

“这么冷，真不知道Little Eye怎么样了？”

那是只鸽子，名字是我从都德的一个短篇题目借来给它用的。夏末的一个多雨的下午，我把它带到学校告诉别人这是我在路上捡到的断了腿的天使。这自然也吸引了她的怜悯。在一个阳光明媚的下午我们包扎了鸽子的伤口，我答应待它伤养好后再带出来。几天前，她居然要看看那只鸽子长大了没有。晚上我再拜访我表哥时被他赶出来了。他责问我鸽子腿是怎么断的。我说演戏总得真实点才有人信。“真实？”他抄起铁锹冲着我喊，“你他妈把这一笼的鸽子腿掰断，她还能抱着你哭呐！”

我表哥告诉我的，他说想要让女孩子喜欢你就得写一手好文字，要写成让她们看后伤心地哭或是幸福地笑的那种。“当然，要是能让她们幸福地哭就是极致了。”他介绍我抄用歌德的《维特》。后来在此基础上我又发现两位非常适用的作家：郁达夫和徐志摩。每次上作文课我都抢着上台朗诵作文，一读就是几篇。看情形就像是郁达夫和徐志摩之间的赛诗会。渐渐我发现我读徐志摩时下面哭的女生更多一些，以至于到现在我还是很尊重他。

“听说你还读《论语》和《诗经》了呢，你都厉害得不可思议。”

这可是我自己悟出来的：要是想进一步讨女孩子的羡慕，就要去读一些她们看不懂我也看不懂的书。我家有本梵文的佛经，看这个有点夸张，先秦两汉的书籍最合适，如果是没有注解的那种就更好了。

“呃——”我在想孔子说的哪一句能用来作为我的表白。想了很久我就记得“学而时习之，不亦乐乎”，这还是上课必背的那段。

那一年我们15岁，我不可自制地喜欢她，有时我就琢磨这种爱恋地感觉源于何时，而且我为什么这般痴狂地迷恋一个人。时常在夜深人静我父母睡熟后我悄悄溜出家门在无人的街道狂奔半个小时跑到她家的大门口看着窗户后面微微吹起的粉色窗帘，天亮之前我会掏出从班级带出的粉笔在墙上、马路以及杨树皮上写满她的名字。我疯狂地看书，原因仅仅是她相信我会成为一个大才子。这之后的几年我都没有找到那种如此迷恋一个女孩的感觉。似乎在当时她是不存在的，我只是在全心爱一个我不断填充修改的完美形象。

五六年之后我们在一家烧烤店里的时候我们借着中学时代的往事踏上了回忆之路。我们谈起班主任那双总爱露出来的“胖头鱼”腿，谈起李江南跑到酒店给他女友拉皮条时奇怪的表情。只是我们两人之间的事总像散开路旁的蒲公英一样被我们小心地绕开了。

“其实我那时候一直都挺喜欢你的。”我看着火炉冒出的白烟漫不经心地说。

“可是你太花心了。”她喝一口可乐，“你女朋友刚出去你就要勾引我。哼！”

“可能是，”我将她的杯子续满，“那时候不是。”

那时候我走在台阶上跟在她后面，数着走过的步子。我知道如果今天再不能说出口，或许此后我也绝无这样的机会。拐过路口时我叫了她一声。

“嗯？”她停住看着我。

“我，我姥爷生了四个女儿，你说他为什么没有儿子呢？”

“可能是你姥爷的妈妈一个女儿也没有吧？”她说着继续往前赶路。

“哎？这倒是真的，他也是只有三个兄弟。”我说完就后悔了，我跟她附和什么呢？

“我要去我舅舅家！”我大声叫道，“我要在他家住一夜！”

“我知道。你嚷什么呀？”

我快走几步和她并排前行，低头看着她的手臂。我几次想抓起她的手都没有足够的勇气。

“你在干吗？地上有钱吗？”

“没有。”我沮丧地说，“你的指甲挺漂亮，牛奶色的。”

“是吗？”她笑了，“可你的指甲是巧克力色的。”

我后来留了很长的指甲，无聊时我就对着灯光修指甲，我总想拥有她那双翡翠一样的指甲。

“你走得太快了，本来是一刻钟的路，现在就剩五分钟了。”

“我都快饿死了。七路车！”她跳起来，“都是你，你说没车了的。”

“反正快到了，坐下来歇一会吧，正好我还有个秘密告诉你。”

“你就说吧，躲躲闪闪的。”

“其实我真的挺喜欢你的。”在烧烤店里我对她说了这个秘密，“至少在那么长的一段时间里。”

“别逗了，你女朋友像收麦子一样一茬茬地换，”她放下杯子笑着向我凑近一点，“你想把我编到第几茬？”

“我没说假话。”我说，“不然这样，这个瓶盖我抠开，要是中奖了那就是上天都在见证我说真话。”可能是我用力过猛，瓶盖落在地上。我钻到桌下掏出我事先备好的瓶盖，起身递给她。我长舒了一口气：“只有千分之几的中奖率。”她看着瓶盖表情严肃起来，把玩着瓶盖像是自言自语道：“可你当时为什么不直接说呢？”

我满意地笑了。我女朋友突然走进来问我在笑什么。

“她刚对我说了个笑话，”我对女友解释，“说战争结束后，一个从战场下来的士兵给他妈妈打电话说他要带了战友回来一起生活。‘行啊。’儿子回来她当然高兴了。‘可他双眼被机打瞎了。’‘也好，我们照顾他。’‘他失去了左腿。’沉默。‘双臂也被截断了。’‘孩子，’那边说话了，‘这样的英雄国家会负责的，为什么非要到咱家住呢？’电话挂断了，士兵跳楼了。等他妈妈看到孩子的尸体时，疑惑覆盖了悲伤，痛苦充满了她的心。她问死去的儿子：可你当时为什么不直接说呢？”

“我可不觉得这是笑话，”女朋友说，“这挺悲哀的。”

“是啊，”她有些感伤地说，“可你当时为什么不直接说呢？”

空气一度凝结在我们三个人的四周。

我当时是想说来着，却无法鼓起足够的勇气。快到她家的时候，我停下来望着她慢慢远去的背影，看着手表我决定一分钟后就对着天空大喊：我没有什么舅舅就是想送你我就是喜欢你！一，二，三……我默数着，一个不知趣的人居然过来向我问路。

“那边，楼后面就是。”我不耐烦地指了指。

“哪呀？”他还缠着我，“黑灯瞎火的。”

“就那儿。”我向前跑两步甩开他，重新看表。

过去55秒了。我已经看不到她了。

56秒了。算上我妈我姥爷有四个女儿，我根本没舅舅。

57秒了。其实我只想送你回家，一会儿我还得原路跑回去呢。

58秒了。我感到脸上湿湿的。

59秒了。滴——

“我喜欢你！”

我等待着自己的回音。声音在楼间撞来撞去最后又流回耳朵里。我打算再等一分钟，这样就刚好一刻钟了。我俯下身听着表针在飘。当飘动的表音响足50下的时候我期待的奇迹就是这样发生的：

她跑回来了。

“下雪啦，你看，下雪啦！”

我仰头望去，天空变成亮红的颜色，我们身后的月亮渐渐消隐。雪花仿佛留恋云间的寒意在空中起起伏伏不愿落下来。“真的，”我失声说，“秋天真的在这一刻钟就过去了。”

她放下书包兴奋地跳起来去抓半空中的雪花，就像是刚刚蜕变出茧的蝴蝶在夜色中翩翩起舞。我静静坐下来时不自然地哭了。我不知道她听到我刚才的呼喊没有。就算没有我也不打算再向她示爱了，以后也不再会了。看着飞舞的蝴蝶，我知道凡人是不能爱仙女的。我整个初中生涯构画的仙女在这一刻成为永恒。`},
]
