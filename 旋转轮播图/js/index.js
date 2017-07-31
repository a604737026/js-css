$(function(){
	var $slidepic = $('#slidepic');
	var aLi = $slidepic.find('li');
	var timer = null;
	var off = true;
	//获得li的位置数据
	var pos = [
		{
			width:564,
			height:330,
			left:34,
			top:0,
			opacity:0,
			z:2
		},
		{
			width:564,
			height:330,
			left:34,
			top:79,
			opacity:0.8,
			z:3
		},
		{
			width:800,
			height:500,
			left:200,
			top:0,
			opacity:1,
			z:4
		},
		{
			width:564,
			height:330,
			left:605,
			top:79,
			opacity:0.8,
			z:3
		},
		{
			width:564,
			height:330,
			left:605,
			top:0,
			opacity:0,
			z:2
		}
	]
	//设置li定位
	fnMove()
	//上一个按钮
	$slidepic.find('.prev').on('click',function(){
		if(off){
			off = false;
			fnMove(true)	
		}
	})
	//下一个按钮
	$slidepic.find('.next').on('click',function(){
		if(off){
			off = false;
			fnMove(false)	
		}
	})
	//li运动函数
	function fnMove(b){
		if(typeof(b) != 'undefined'){         //判断参数有没有传，没有就设置li位置，传了就是按钮点击
			if(b){
				pos.push(pos.shift())
			}else{
				pos.unshift(pos.pop())
			}
		}
		$.each(pos, function(i, val) {
			aLi.eq(i).css('zIndex',pos[i].z).stop().animate(pos[i],500,function(){
				off = true;
			});
		});
	}
	//开启定时器自动播放
	timer = setInterval(function(){
		fnMove(true)
	},5000)
	//暂停继续播放，显示隐藏左右切换按钮
	$slidepic.hover(function(){
		clearInterval(timer)
		$(this).find('.toggle').fadeIn();
	},function(){
		clearInterval(timer)
		timer = setInterval(function(){
			fnMove(true)
		},5000)
		$(this).find('.toggle').fadeOut();
	})
})