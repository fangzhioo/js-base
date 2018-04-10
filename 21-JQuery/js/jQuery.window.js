

//自定义方法 让jq获取的元素可以调用，而且能实现链式调用
(function($){
	$.fn.extend({
		//positionObj 参数是当前这个元素定位的位置  center left right
		myWindow : function(positionObj,fn){
			//最好是有能够自定义元素的参数  fn动画
			
			//设置变量的名字   使用JQ得到的返回值，名字前通常是加一个$
			var $windowObj = $(window);//获取window元素 --- 窗口的宽和高
			//存储指向jq对象的this指针
			var $this = this;
			//窗口的宽 高  滚动条的top left
			var $winW,$winH,$scrollT,$scrollL;
			
			//计算滚动条和窗口
			function getSize(){
				$winW    = $windowObj.width();
				$winH    = $windowObj.height();
				$scrollT = $windowObj.scrollTop();
				$scrollL = $windowObj.scrollLeft();
				//前面的定义的一些变量的值的存储都可以通过这个方法
			}
			
			//获取当前元素的宽和高   this指向的是外面调用这个方法的元素
			var $boxW = $this.width();
			var $boxH = $this.height();
			
			
			//计算当前的位置  position的定位 left top
			var left, top;
			//设置当前元素的left定位
			function setBoxLeft(){
				//根据传进来的参数做判断
				if(positionObj.left == 'center'){
					//水平居中
					left = ($winW - $boxW)/2;
				}else if(positionObj.left == 'left'){
					//居左
					left = 0;
				}else if(positionObj.left == 'right'){
					//居右
					left = $winW - $boxW;
				}
			}
			
			//设置当前元素的top定位
			function setBoxTop(){
				//根据参数中top值判断
				if(positionObj.top == 'center'){
					//垂直居中
					top = $scrollT + ($winH - $boxH)/2;
				}else if(positionObj.top == 'top'){
					//居上
					top = $scrollT;
				}else if(positionObj.top == 'bottom'){
					//居下
					top = $scrollT + $winH - $boxH;
				}
			}
			
			//调用上面的方法
//			getSize();
//			setBoxLeft();
//			setBoxTop();
			change();
			
			//窗口或滚动改变的时候 调用这个方法
			function change(){
				getSize();
				setBoxLeft();
				setBoxTop();
				$this.stop().animate({
					'left' : left,
					'top' : top
				},500);
			}
			
			//绑定scroll事件  浏览器滚动
			$windowObj.scroll(function(){
				change();
			})
			//绑定resize事件  浏览器窗口的改变
			$windowObj.resize(function(){
				change();
			})
			
			//点击元素消失  如果有X，就找这个元素，然后给这个元素绑定click事件
			this.click(function(){
//				$this.slideUp(500);
				//!= null 说明传参了    == function 说明传的是一个函数
				if(fn != null && typeof fn == 'function'){
					fn();
				}else{
					$this.slideUp(500);
				}
			})
			
			//返回自身  方便链式调用
			return this;
		}
//		getSize : function(){
//			
//		}
	})
})(jQuery);
