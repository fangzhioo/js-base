
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
