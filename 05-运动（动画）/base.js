
//获得指定id的DOM元素
function $(id){
	return document.getElementById(id);
}

//随机一个颜色
function randomColor(){
	//16进制颜色
	var str = String("1234567890ABCDEF");
	//#ffffff  #ff0000
	var arr= new Array();
	arr[0] = "#";
	for(var i=1; i<7; i++){
		// 0 - 15  字符串的下标
		var c = parseInt(Math.random()*16);
		//提取字符 存储到数组内
		arr[i] = str.charAt(c);
	}
	//把每个元素拼接成一个16进制颜色的字符串
	var newStr = arr.join("");
	
	return newStr;
}
//获取可视区域的宽
function $w(){
	return document.documentElement.clientWidth || document.body.clientWidth;
}
//获取可视区域的高
function $h(){
	return document.documentElement.clientHeight || document.body.clientHeight;
}

//scrollTop滚动条距离顶部的距离
function $top(){
	return document.documentElement.scrollTop || document.body.scrollTop;
}

//处理高级事件的兼容性问题，我们可以封装成一个方法，方便以后调用
function addEvent(elem, type, fn) {
	//IE
	if(elem.attachEvent) {
		elem.attachEvent('on' + type, fn)
	}
	//非IE
	if(elem.addEventListener) {
		elem.addEventListener(type, fn, false);
	}
}

//获取event的target
function getTarget(e){
	var myEvent = e || window.event;
	
	var target = myEvent.target || myEvent.srcElement;
	
	return target;
}

//获取元素内部眼样式或外部样式（css属性）
function getStyle(elem,style){
	//IE
	if(elem.currentStyle){
		return elem.currentStyle[style];
	}else{//非IE
		return window.getComputedStyle(elem,null)[style];
	}
}
/*
 	 自己封装基础函数库base.js
 *  1.调用方便                 （我们定义的方法名字更加简单）
 *  2.提高代码复用度      （相同功能直接调用相应函数，减少重复代码的书写）
 *  3.处理了兼容             （我们在需要兼容的地方做了判断，解决了兼容的问题）
 * 	4.易于维护       （ 官网方法如果改变或者项目中某个功能需要改变，我们可以直接修改相应函数 ）
 *  5.易于移植	（如果别的项目也有这方便需求，我么可以直接帮这个js文件拖到该工程内）
 * */