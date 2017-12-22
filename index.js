window.onload=function () {


	/**/
		var step = 1;
		var lh = document.getElementById('light');
		console.log(lh)
		function liGht(){
			if(step == 1){
				lh.style.display='none';
			}else if(step == 2){
				lh.style.display='block';
			}else if(step == 3){
				lh.style.display='none';
			}else if(step == 4){
				lh.style.display='block';
			}else if(step == 5){
				lh.style.display='none';
			}else{
				lh.style.display='block';
			}
			step++;
		}
		var timer= setInterval(liGht,200);

	/**/ 
	$(window).scroll(function() {
        var scrTop = $(window).scrollTop();
        if (scrTop >= 500) {
            $('#box .content').fadeIn();
        };
        // console.log(scrTop);
    })
	var s1 = document.getElementsByClassName('move1');
	var s2 = document.getElementsByClassName('move2');
	var s3 = document.getElementsByClassName('move3');
	console.log(s1)
    var btn = document.querySelectorAll('.search>img');
    // var btn1 = document.querySelectorAll('.searchs>img');
    // var btn2 = document.querySelectorAll('.searches>img');
    console.log(btn);
    // console.log(btn1);
    // console.log(btn2);
    for (var index=0;index<btn.length;index++){
    	btn[index].index=index;
    	btn[index].onmouseover=function(){
    		if(this.index<=4){
				s1[0].style.color='#ff7000';
				s1[0].style.transform='scale(1.2)';
				s1[0].style.transition='0.5s';
			}else if(this.index>=5&&this.index<10){
				s2[0].style.color='#ff7000';
				s2[0].style.transform='scale(1.2)';
				s2[0].style.transition='0.5s';
			}else{
				s3[0].style.color='#ff7000';
				s3[0].style.transform='scale(1.2)';
				s3[0].style.transition='0.5s';
			}
    	}
    	btn[index].onmouseout=function(){
    		if(this.index>=4){
				s1[0].style.color='#fff';
				s1[0].style.transform='scale(1)';
				s1[0].style.transition='0.5s';
				s3[0].style.color='#fff';
				s3[0].style.transform='scale(1)';
				s3[0].style.transition='0.5s';
				s2[0].style.color='#fff';
				s2[0].style.transform='scale(1)';
				s2[0].style.transition='0.5s';
			}
			else if(this.index>9&&this.index<=14){
				s2[0].style.color='#fff';
				s2[0].style.transform='scale(1)';
				s2[0].style.transition='0.5s';
				s3[0].style.color='#fff';
				s3[0].style.transform='scale(1)';
				s3[0].style.transition='0.5s';

				s1[0].style.color='#fff';
				s1[0].style.transform='scale(0.8)';
				s1[0].style.transition='0.5s';
			}
			else if(this.index>14){
				s3[0].style.color='#fff';
				s3[0].style.transform='scale(1)';
				s3[0].style.transition='0.5s';
				s2[0].style.color='#fff';
				s2[0].style.transform='scale(1)';
				s2[0].style.transition='0.5s';
				s1[0].style.color='#fff';
				s1[0].style.transform='scale(0.8)';
				s1[0].style.transition='0.5s';
			}else{
				s1[0].style.color='#fff';
				s1[0].style.transform='scale(1)';
				s1[0].style.transition='0.5s';
			}
    	}
    }

  var show = document.getElementById('show');
function getDownTime(dt){
	 		// 获取倒计时
	 		// 获取从现在到指定时间之间所差的毫秒数
	 		var intevaLMsec=dt-Date.now();
	 		// 将毫秒转换成秒
	 		var interValSec=intevaLMsec/1000;
	 		// 将秒转换成天
	 		var day=parseInt(interValSec/3600/24);

	
	 		var times=day;
	 		return times;
	 	}

		function getTime(){
			show.innerHTML = getDownTime(t);
		}

		//3. 启动定时器
		var t = new Date('2019/1/1');
		var timer = setInterval(getTime,1000);







var lis=document.querySelectorAll('#UL>li');
  var timer = null;
  var isTop = true;
  //获取页面可视区高度
  var clientHeight = document.documentElement.clientHeight;
 
   
 
 
  lis[0].onclick = function() {
    //设置定时器
    timer = setInterval(function(){
      //获取滚动条距离顶部高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(osTop)
      var ispeed = Math.floor(-osTop / 7);
      console.log(ispeed)
       
      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
      //到达顶部，清除定时器
      if (osTop == 0) {
        clearInterval(timer);
      };
      isTop = true;
       
    },30);
  };




    
}























