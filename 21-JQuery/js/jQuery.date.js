
//时间格式  传一个时间 ---  2016年12月28日 星期三 15时28分20秒

(function($){
	//给JQ对象扩展方法  $.getDateString(date)
	$.extend({
		getDateSting : function(date){
			var str = date.getFullYear() + '年' + (date.getMonth()+1) + '月' + 
				      date.getDate() + '日  ' + this.getDayToWeek(date.getDay()) +
				      '  ' + date.getHours() + '时' + date.getMinutes() + '分' +
				      date.getSeconds() + '秒';
				return str;
		},
		//把getDay（这一周的第几天）转成星期几
		getDayToWeek : function(num){
			switch(num){
				case 0:
					return "星期日";
				case 1:
					return "星期一";
				case 2:
					return "星期二";
				case 3:
					return "星期三";
				case 4:
					return "星期四";
				case 5:
					return "星期五";
				case 6:
					return "星期六";
			}
		}
	});
})(jQuery)


