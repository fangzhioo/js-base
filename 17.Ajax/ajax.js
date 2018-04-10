//封装Ajax功能（url请求的网址/接口，sucessfn响应成功后做什么，fialfn失败后做什么）
function getData(url,sucessfn,failfn){
	var oAjax = null;
	if(window.XMLHttpRequest){
		//创建请求对象  非IE
		oAjax = new XMLHttpRequest();
	}else{
		//IE
		oAjax = new ActiveXObject();
	}
	//open打开和服务器的连接
	oAjax.open('GET',url,true);
	
	//发送请求
	oAjax.send();
	
	//接受响应,   准备处理响应数据
	oAjax.onreadystatechange = function(){
		//状态码改变的时候，准备做什么
		
		if(oAjax.readyState == 4){
			//状态码是4的时候处理数据
			if(oAjax.status == 200){
				//响应成功
				console.log(oAjax.responseText);
				//responseText 成功相应的数据
				//响应成功做什么
				sucessfn(oAjax.responseText);
				
			}else{
				//调用失败之后处理方式
				failfn();
			}
		}
		
	}
}