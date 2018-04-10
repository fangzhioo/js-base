

//把缓冲运动封装

function startMove(obj,attr, num, fn){
	//这个方法里需要什么，需要什么我们需要传什么
	//obj 需要运动的元素    attr css属性   num 要运动的终止位置
	//fn 运动结束后调用的方法
	// left --- 0   left --- -75
	
	//清除上一次的定时器
	//（一个元素在不同情况下调用了，每个情况下都调用了这个方法）
	//例如：mouseover和mouseout
	clearInterval(obj.timer);
	//把定时器绑定在DOM元素上（因为可能不同的元素都调了这个方法）
	obj.timer = setInterval(function(){
		//算速度
		//offsetLeft --- left
		//当前attr属性的值
		var iCur = parseInt(getStyle(obj,attr));//div.style.left
		//元素真正移动的距离(num - iCur)
		//递减的速度
		var speed = (num - iCur)/5;//-150
		//-150 - -30  -120 -- -24   -----------    小数-0.1111  --- 0  -1
		//取整
		speed > 0 ? speed= Math.ceil(speed):speed = Math.floor(speed);
//		if(speed > 0){
//			speed= Math.ceil(speed)
//		}else{
//			speed = Math.floor(speed)
//		}
		
		console.log(iCur,speed);
		
		//在移动到终点的时候停止定时器
		if(iCur == num){
			clearInterval(obj.timer);
			
			//调用一个方法（startMove）
			if(fn){
				fn();
			}
			
		}else{
			//不断改变attr的值
			obj.style[attr] =  iCur + speed + "px";
			//-1 + 1 = 0
			//-149 +(-1) = -150
		}
		
		
		
		
	},30)
	
}






