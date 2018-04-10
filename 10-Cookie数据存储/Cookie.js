


//使用cookie存储数据

function setCookie(key,value,date){
	//参数：   键   =  值     expires=时间
//	var oDate = new Date();
//	oDate.setDate(oDate.getDate() + date);
	
	document.cookie = key+'='+value+';expires='+date;
	//name=tom;expires=2016....
}


//获取cookie存储的某个数据
function getValueOfCookie(key){
	//userName=tom; user=luby; x=8; y=8; 
	var arr = document.cookie.split('; ');
	/*  arr
	 * 	['name=tom','user=lub','x=8','y=8',]
	 * */
	for(var i = 0; i < arr.length; i++){
		var arr2 = arr[i].split('=');//[name,tom] [user,lub] [x,8],[y,8]
		if(arr2[0] == key){
			
			return arr2[1];
		}
	}
	//如果没有找到 返回空字符串
	return "";
}

//删除某个cookie数据  删除就是设置，只不过存储时间小于等于0（没有存储时间）
function removeKeyOfCookie(key){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() - 1);
	
	setCookie(key,' ',oDate);
}















