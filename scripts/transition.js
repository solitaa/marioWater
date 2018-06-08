function changeView()
{
	$("#map").empty();
	var map=$("<div/>").css({
		"position":"relative",
		"background-color":"rgb(92, 148, 252)",
		"width":"800px",
		"height":"428px"
	}).appendTo("#map")
	var d1=$("<div/>").css({
		"position":"absolute",
		"background-color":"#2038ec",
		"width":"6176px",
		"height":"384px",
		"left":"0",
		"top":"44px"
	}).attr("id","world").appendTo(map);
	//Hero

	var mario=new Hero();

	

	//floor
	var fl1=$("<div/>").css({
		"height":"32px",
		"width":"2112px",
		"top":"352px",
		"left":"0px"	
	}).attr({"class":"floors","id":"floor1"}).appendTo(d1);
	var fl2=$("<div/>").css({
		"height":"32px",
		"width":"96px",
		"top":"224px",
		"left":"576px"	
	}).attr({"class":"floors","id":"floor2"}).appendTo(d1);
	var fl3=$("<div/>").css({
		"height":"32px",
		"width":"64px",
		"top":"224px",
		"left":"1344px"	
	}).attr({"class":"floors","id":"floor3"}).appendTo(d1);
	var fl4=$("<div/>").css({
		"height":"96px",
		"width":"64px",
		"top":"256px",
		"left":"2048px"	
	}).attr({"class":"floors","id":"floor4"}).appendTo(d1);
	var fl5=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"192px",
		"left":"2080px"	
	}).attr({"class":"floors","id":"floor5"}).appendTo(d1);
	var fl6=$("<div/>").css({
		"height":"96px",
		"width":"64px",
		"top":"256px",
		"left":"2272px"	
	}).attr({"class":"floors","id":"floor6"}).appendTo(d1);
	var fl7=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"192px",
		"left":"2272px"	
	}).attr({"class":"floors","id":"floor7"}).appendTo(d1);
	var fl8=$("<div/>").css({
		"height":"32px",
		"width":"1920px",
		"top":"352px",
		"left":"2272px"	
	}).attr({"class":"floors","id":"floor8"}).appendTo(d1);
	var fl9=$("<div/>").css({
		"height":"96px",
		"width":"64px",
		"top":"0px",
		"left":"2496px"	
	}).attr({"class":"floors","id":"floor9"}).appendTo(d1);
	var fl10=$("<div/>").css({
		"height":"96px",
		"width":"64px",
		"top":"256px",
		"left":"2496px"	
	}).attr({"class":"floors","id":"floor10"}).appendTo(d1);
	var fl11=$("<div/>").css({
		"height":"32px",
		"width":"96px",
		"top":"96px",
		"left":"2624px"	
	}).attr({"class":"floors","id":"floor11"}).appendTo(d1);
	var fl12=$("<div/>").css({
		"height":"32px",
		"width":"64px",
		"top":"224px",
		"left":"3264px"	
	}).attr({"class":"floors","id":"floor12"}).appendTo(d1);
	var fl13=$("<div/>").css({
		"height":"32px",
		"width":"64px",
		"top":"192px",
		"left":"3680px"	
	}).attr({"class":"floors","id":"floor13"}).appendTo(d1);
	var fl14=$("<div/>").css({
		"height":"64px",
		"width":"64px",
		"top":"288px",
		"left":"4128px"	
	}).attr({"class":"floors","id":"floor14"}).appendTo(d1);
	var fl15=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"224px",
		"left":"4128px"	
	}).attr({"class":"floors","id":"floor15"}).appendTo(d1);
	var fl16=$("<div/>").css({
		"height":"32px",
		"width":"288px",
		"top":"64px",
		"left":"4192px"	
	}).attr({"class":"floors","id":"floor16"}).appendTo(d1);
	var fl17=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"0px",
		"left":"4192px"	
	}).attr({"class":"floors","id":"floor17"}).appendTo(d1);
	var fl18=$("<div/>").css({
		"height":"32px",
		"width":"544px",
		"top":"352px",
		"left":"4480px"	
	}).attr({"class":"floors","id":"floor18"}).appendTo(d1);
	var fl19=$("<div/>").css({
		"height":"64px",
		"width":"64px",
		"top":"288px",
		"left":"4480px"	
	}).attr({"class":"floors","id":"floor19"}).appendTo(d1);
	var fl20=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"224px",
		"left":"4512px"	
	}).attr({"class":"floors","id":"floor20"}).appendTo(d1);
	var fl21=$("<div/>").css({
		"height":"224px",
		"width":"32px",
		"top":"128px",
		"left":"4992px"	
	}).attr({"class":"floors","id":"floor21"}).appendTo(d1);
	var fl22=$("<div/>").css({
		"height":"32px",
		"width":"96px",
		"top":"96px",
		"left":"4992px"	
	}).attr({"class":"floors","id":"floor22"}).appendTo(d1);
	var fl23=$("<div/>").css({
		"height":"32px",
		"width":"96px",
		"top":"96px",
		"left":"5184px"	
	}).attr({"class":"floors","id":"floor23"}).appendTo(d1);
	var fl24=$("<div/>").css({
		"height":"224px",
		"width":"32px",
		"top":"128px",
		"left":"5248px"	
	}).attr({"class":"floors","id":"floor24"}).appendTo(d1);
	var fl25=$("<div/>").css({
		"height":"32px",
		"width":"928px",
		"top":"352px",
		"left":"5248px"	
	}).attr({"class":"floors","id":"floor25"}).appendTo(d1);
	var fl26=$("<div/>").css({
		"height":"32px",
		"width":"160px",
		"top":"224px",
		"left":"5504px"	
	}).attr({"class":"floors","id":"floor26"}).appendTo(d1);
	var fl27=$("<div/>").css({
		"height":"32px",
		"width":"160px",
		"top":"96px",
		"left":"5504px"	
	}).attr({"class":"floors","id":"floor27"}).appendTo(d1);
	var fl28=$("<div/>").css({
		"height":"32px",
		"width":"128px",
		"top":"224px",
		"left":"5760px"	
	}).attr({"class":"floors","id":"floor28"}).appendTo(d1);
	var fl29=$("<div/>").css({
		"height":"32px",
		"width":"128px",
		"top":"96px",
		"left":"5760px"	
	}).attr({"class":"floors","id":"floor29"}).appendTo(d1);
	var fl30=$("<div/>").css({
		"height":"32px",
		"width":"256px",
		"top":"320px",
		"left":"5920px"	
	}).attr({"class":"floors","id":"floor30"}).appendTo(d1);
	var fl31=$("<div/>").css({
		"height":"32px",
		"width":"224px",
		"top":"288px",
		"left":"5952px"	
	}).attr({"class":"floors","id":"floor31"}).appendTo(d1);
	var fl32=$("<div/>").css({
		"height":"32px",
		"width":"192px",
		"top":"256px",
		"left":"5984px"	
	}).attr({"class":"floors","id":"floor32"}).appendTo(d1);
	var fl33=$("<div/>").css({
		"height":"32px",
		"width":"160px",
		"top":"224px",
		"left":"6016px"	
	}).attr({"class":"floors","id":"floor33"}).appendTo(d1);
	var fl34=$("<div/>").css({
		"height":"96px",
		"width":"96px",
		"top":"128px",
		"left":"6080px"	
	}).attr({"class":"floors","id":"floor34"}).appendTo(d1);
	var fl35=$("<div/>").css({
		"height":"128px",
		"width":"160px",
		"top":"0px",
		"left":"6016px"	
	}).attr({"class":"floors","id":"floor35"}).appendTo(d1);
	var fl36=$("<div/>").css({
		"height":"32px",
		"width":"32px",
		"top":"256px",
		"left":"4928px"	
	}).attr({"class":"floors","id":"floor36"}).appendTo(d1);
	//koral
	var k1=$("<div/>").css({
		"height":"96px",
		"width":"32px",
		"top":"256px",
		"left":"352px"	
	}).attr({"class":"korals","id":"koral1"}).appendTo(d1);
	var k2=$("<div/>").css({
		"height":"160px",
		"width":"32px",
		"top":"192px",
		"left":"1056px"	
	}).attr({"class":"korals","id":"koral2"}).appendTo(d1);
	var k3=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"160px",
		"left":"1344px"	
	}).attr({"class":"korals","id":"koral3"}).appendTo(d1);
	var k4=$("<div/>").css({
		"height":"128px",
		"width":"32px",
		"top":"224px",
		"left":"1600px"	
	}).attr({"class":"korals","id":"koral4"}).appendTo(d1);
	var k5=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"32px",
		"left":"2656px"	
	}).attr({"class":"korals","id":"koral5"}).appendTo(d1);
	var k6=$("<div/>").css({
		"height":"96px",
		"width":"32px",
		"top":"256px",
		"left":"2848px"	
	}).attr({"class":"korals","id":"koral6"}).appendTo(d1);
	var k7=$("<div/>").css({
		"height":"128px",
		"width":"32px",
		"top":"96px",
		"left":"3264px"	
	}).attr({"class":"korals","id":"koral7"}).appendTo(d1);
	var k8=$("<div/>").css({
		"height":"128px",
		"width":"32px",
		"top":"224px",
		"left":"3840px"	
	}).attr({"class":"korals","id":"koral8"}).appendTo(d1);
	var k9=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"288px",
		"left":"4704px"	
	}).attr({"class":"korals","id":"koral9"}).appendTo(d1);
	var k10=$("<div/>").css({
		"height":"96px",
		"width":"32px",
		"top":"256px",
		"left":"4768px"	
	}).attr({"class":"korals","id":"koral10"}).appendTo(d1);
	var k11=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"top":"32px",
		"left":"5536px"	
	}).attr({"class":"korals","id":"koral11"}).appendTo(d1);

	
	//coins

	var coin1=$("<div/>").css({
		"top":"320px",
		"left":"448px"
	}).attr({"class":"coins","id":"coin1"}).appendTo(d1);
	var coin2=$("<div/>").css({
		"top":"320px",
		"left":"480px"
	}).attr({"class":"coins","id":"coin2"}).appendTo(d1);
	var coin3=$("<div/>").css({
		"top":"96px",
		"left":"858px"
	}).attr({"class":"coins","id":"coin3"}).appendTo(d1);
	var coin4=$("<div/>").css({
		"top":"96px",
		"left":"890px"
	}).attr({"class":"coins","id":"coin4"}).appendTo(d1);
	var coin5=$("<div/>").css({
		"top":"96px",
		"left":"922px"
	}).attr({"class":"coins","id":"coin5"}).appendTo(d1);
	var coin6=$("<div/>").css({
		"top":"320px",
		"left":"1152px"
	}).attr({"class":"coins","id":"coin6"}).appendTo(d1);
	var coin7=$("<div/>").css({
		"top":"320px",
		"left":"1184px"
	}).attr({"class":"coins","id":"coin7"}).appendTo(d1);
	var coin8=$("<div/>").css({
		"top":"320px",
		"left":"1216px"
	}).attr({"class":"coins","id":"coin8"}).appendTo(d1);
	var coin9=$("<div/>").css({
		"top":"256px",
		"left":"2144px"
	}).attr({"class":"coins","id":"coin9"}).appendTo(d1);
	var coin10=$("<div/>").css({
		"top":"256px",
		"left":"2176px"
	}).attr({"class":"coins","id":"coin10"}).appendTo(d1);
	var coin11=$("<div/>").css({
		"top":"256px",
		"left":"2208px"
	}).attr({"class":"coins","id":"coin11"}).appendTo(d1);
	var coin12=$("<div/>").css({
		"top":"288px",
		"left":"3232px"
	}).attr({"class":"coins","id":"coin12"}).appendTo(d1);
	var coin13=$("<div/>").css({
		"top":"288px",
		"left":"3264px"
	}).attr({"class":"coins","id":"coin13"}).appendTo(d1);
	var coin14=$("<div/>").css({
		"top":"288px",
		"left":"3296px"
	}).attr({"class":"coins","id":"coin14"}).appendTo(d1);
	var coin15=$("<div/>").css({
		"top":"128px",
		"left":"3616px"
	}).attr({"class":"coins","id":"coin15"}).appendTo(d1);
	var coin16=$("<div/>").css({
		"top":"128px",
		"left":"3648px"
	}).attr({"class":"coins","id":"coin16"}).appendTo(d1);
	var coin17=$("<div/>").css({
		"top":"128px",
		"left":"3680px"
	}).attr({"class":"coins","id":"coin17"}).appendTo(d1);
	var coin18=$("<div/>").css({
		"top":"288px",
		"left":"4256px"
	}).attr({"class":"coins","id":"coin18"}).appendTo(d1);
	var coin19=$("<div/>").css({
		"top":"320px",
		"left":"4288px"
	}).attr({"class":"coins","id":"coin19"}).appendTo(d1);
	var coin20=$("<div/>").css({
		"top":"320px",
		"left":"4320px"
	}).attr({"class":"coins","id":"coin20"}).appendTo(d1);
	var coin21=$("<div/>").css({
		"top":"320px",
		"left":"4352px"
	}).attr({"class":"coins","id":"coin21"}).appendTo(d1);
	var coin22=$("<div/>").css({
		"top":"288px",
		"left":"4384px"
	}).attr({"class":"coins","id":"coin22"}).appendTo(d1);
	var coin23=$("<div/>").css({
		"top":"224px",
		"left":"5088px"
	}).attr({"class":"coins","id":"coin23"}).appendTo(d1);
	var coin24=$("<div/>").css({
		"top":"224px",
		"left":"5120px"
	}).attr({"class":"coins","id":"coin24"}).appendTo(d1);
	var coin25=$("<div/>").css({
		"top":"224px",
		"left":"5152px"
	}).attr({"class":"coins","id":"coin25"}).appendTo(d1);
	var coin26=$("<div/>").css({
		"top":"320px",
		"left":"5088px"
	}).attr({"class":"coins","id":"coin26"}).appendTo(d1);
	var coin27=$("<div/>").css({
		"top":"320px",
		"left":"5120px"
	}).attr({"class":"coins","id":"coin27"}).appendTo(d1);
	var coin28=$("<div/>").css({
		"top":"320px",
		"left":"5152px"
	}).attr({"class":"coins","id":"coin28"}).appendTo(d1);
	
	//end

	var end=$("<div/>").css({
		"height":"64px",
		"width":"32px",
		"position":"absolute",
		"top":"160px",
		"left":"6048px"	
	}).attr("id","end").appendTo(d1);

	var med1= new Enemy("meduza",624,256,1);
	var med2= new Enemy("meduza",1408,224,2);
	var med3= new Enemy("meduza",1696,128,3);
	var med4= new Enemy("meduza",2592,192,4);
	var med5= new Enemy("meduza",2976,128,5);

	var dzuk1= new Enemy("dzuk",2555,106,1);
	var dzuk2= new Enemy("dzuk",2752,32,2);
	var dzuk3= new Enemy("dzuk",3488,255,3);
	var dzuk4= new Enemy("dzuk",3616,280,4);
	var dzuk5= new Enemy("dzuk",3936,128,5);
	var dzuk6= new Enemy("dzuk",4832,32,6);

	var spdzuk1= new Enemy("spdzuk",2368,180,1);
	var spdzuk2= new Enemy("spdzuk",2496,192,2);
	var spdzuk3= new Enemy("spdzuk",2965,32,3);
	var spdzuk4= new Enemy("spdzuk",3072,70,4);
	var spdzuk5= new Enemy("spdzuk",3205,68,5);
	var spdzuk6= new Enemy("spdzuk",4064,32,6);
	var spdzuk7= new Enemy("spdzuk",4384,320,7);
	var spdzuk8= new Enemy("spdzuk",4640,96,8);
	var spdzuk9= new Enemy("spdzuk",5184,130,9);
	var spdzuk10= new Enemy("spdzuk",5448,2,10);
	var spdzuk11= new Enemy("spdzuk",5570,189,11);
	var spdzuk12= new Enemy("spdzuk",5715,97,12);
	
	var enemies=[med1,med2,med3,med4,med5,dzuk1,dzuk2,dzuk3,dzuk4,dzuk5,dzuk6,spdzuk1,spdzuk2,spdzuk3,spdzuk4,spdzuk5,spdzuk6,spdzuk7,spdzuk8,spdzuk9,spdzuk10,spdzuk11,spdzuk12];

//------------------------------------------

	var hero=$("#hero");
    var floor=[$("#floor1"),$("#floor2"),$("#floor3"),$("#floor4"),$("#floor5"),$("#floor6"),$("#floor7"),$("#floor8"),$("#floor9"),$("#floor10"),$("#floor11"),$("#floor12"),$("#floor13"),$("#floor14"),$("#floor15"),$("#floor16"),$("#floor17"),$("#floor18"),$("#floor19"),$("#floor20"),$("#floor21"),$("#floor22"),$("#floor23"),$("#floor24"),$("#floor25"),$("#floor26"),$("#floor27"),$("#floor28"),$("#floor29"),$("#floor30"),$("#floor31"),$("#floor32"),$("#floor33"),$("#floor34"),$("#floor35"),$("#floor36")];
	var coin=[$("#coin1"),$("#coin2"),$("#coin3"),$("#coin4"),$("#coin5"),$("#coin6"),$("#coin7"),$("#coin8"),$("#coin9"),$("#coin10"),$("#coin11"),$("#coin12"),$("#coin13"),$("#coin14"),$("#coin15"),$("#coin16"),$("#coin17"),$("#coin18"),$("#coin19"),$("#coin20"),$("#coin21"),$("#coin22"),$("#coin23"),$("#coin24"),$("#coin25"),$("#coin26"),$("#coin27"),$("#coin28")];
	var koral=[$("#koral1"),$("#koral2"),$("#koral3"),$("#koral4"),$("#koral5"),$("#koral6"),$("#koral7"),$("#koral8"),$("#koral9"),$("#koral10"),$("#koral11")];
    var directions = {};
    var speedXR=4;
    var speedXL=4;
    var speedY=0;
    var mr=true;
    var ml=true;

    var lastDirection = "down";
	var count = 0;
	var imageCounter = 0;

    var gravity=0.2;
    var jumpState=false;

    var STATIC_HOR_CENTER;
    var STATIC_VER_CENTER;

    var WIDTH_DIFFERENCE;
    var HEIGHT_DIFFERENCE;

    var hero_HOR_CENTER;
    var hero_VER_CENTER;

    var Mhor=false;

    $("html").keyup(stop).keydown(charMovement);
    function charMovement(e)
    {
    	directions[e.which]=true;
    }
    function stop(e)
    {
    	delete directions[e.which];
    }
    function chekCollision(n)
    {
    	
        for(var i in n)
        {


        	STATIC_HOR_CENTER=n[i].position().left + n[i].width()/2;
    		STATIC_VER_CENTER=n[i].position().top;

    		WIDTH_DIFFERENCE=hero.width()/2+n[i].width()/2;
    		//HEIGHT_DIFFERENCE=hero.height()/2+floor.height()/2;

        	hero_HOR_CENTER=hero.position().left+hero.width()/2;
        	hero_VER_CENTER=hero.position().top+hero.height();
        	if(Math.abs(hero_HOR_CENTER - STATIC_HOR_CENTER)<=WIDTH_DIFFERENCE && Math.abs(hero_VER_CENTER - STATIC_VER_CENTER)<=5)
        	{
        		jumpState=false;
        		hero.css("top", n[i].position().top - hero.height());
                speedY=9;
                break;
        	}
        	else
        	{
                if(jumpState==false)
                {
                    speedY=0;
                    jumpState=true;
                }
        	}
        	if(
        		(hero.position().left+hero.width()>=n[i].position().left) && 
        		(hero.position().left<=n[i].position().left+n[i].width()) && 
        		(hero.position().top<=n[i].position().top+n[i].height()) &&
        		(hero.position().top>n[i].position().top+n[i].height()-10)  
        		)
        	{
        		hero.css("top", n[i].position().top+n[i].height());
        		speedY=-9;
        		break;
        	}
        	if(hero.position().top>d1.height())
    		{	
    			mario.lose();
    			{
    				if(mario.Lives>0)
    				{
    					alert("You lose!");
    					d1.css("left","0px");
    					hero.css({"left":mario.lp+"px","top":mario.tp+"px"});
    				}
    			}
    			
    			
    		}
    		
        	if(
        		(hero.position().left+hero.width()<n[i].position().left+n[i].width()) && 
        		(hero.position().left+hero.width()>=n[i].position().left) && 
        		(hero.position().top+hero.height()>=n[i].position().top) && 
        		(hero.position().top<=n[i].position().top+n[i].height())
        		)
        	{
        		hero.css("left", n[i].position().left - hero.width());
        		mr=false;
        		break;
        	}
        	else
        	{
        		mr=true;
        	}
        	if(
        		(hero.position().left>n[i].position().left) && 
        		(hero.position().left<=n[i].position().left+n[i].width()) && 
        		(hero.position().top+hero.height()>=n[i].position().top) && 
        		(hero.position().top<=n[i].position().top+n[i].height())
        		)
        	{
        		hero.css("left", n[i].position().left+n[i].width());
        		ml=false;
        		break;
        	}
        	else
        	{
        		ml=true;
        	}
        }
    }
    
    function chekColCoin(m){
    	for (var i in m) {
    	
        	if(
        		((hero.position().left+hero.width()<m[i].position().left+m[i].width()) && 
        		(hero.position().left+hero.width()>=m[i].position().left) && 
        		(hero.position().top+hero.height()>=m[i].position().top) && 
        		(hero.position().top<=m[i].position().top+m[i].height()))||
        		((hero.position().left>m[i].position().left) && 
        		(hero.position().left<=m[i].position().left+m[i].width()) && 
        		(hero.position().top+hero.height()>=m[i].position().top) && 
        		(hero.position().top<=m[i].position().top+m[i].height()))
        		)
        	{
        		mario.CoinUp();
        		m[i].remove();
        	}
        }
    }

     function chekColEnemy(k){
    	for (var i in k) {
        	if(
        		((hero.position().left+hero.width()<k[i].area.position().left+k[i].area.width()) && 
        		(hero.position().left+hero.width()>=k[i].area.position().left) && 
        		(hero.position().top+hero.height()>k[i].area.position().top) && 
        		(hero.position().top<=k[i].area.position().top+k[i].area.height()))||
        		((hero.position().left>k[i].area.position().left) && 
        		(hero.position().left<=k[i].area.position().left+k[i].area.width()) && 
        		(hero.position().top+hero.height()>=k[i].area.position().top) && 
        		(hero.position().top<=k[i].area.position().top+k[i].area.height()))
        		)
        	{
        		mario.lose();
        		if(mario.Lives>0)
    			{
    				alert("You lose!");
    				d1.css("left","0px");
    				hero.css({"left":mario.lp+"px","top":mario.tp+"px"});
   				}
        	}
        }
    }
    function move(e)
    {
    	if((count+=20)%200==0)
		{
			imageCounter=imageCounter== 4 ? 0 : (imageCounter + 1);
		}
    	for(var i in directions)
    	{
    		if(hero.position().left>0 && i==37 && ml==true)
    		{
    			hero.css("left",(hero.position().left-speedXL)+"px");
    			hero.css("background-position",-288 +32*imageCounter+"px 0");
    			if((hero.position().left>$("#map").width()/2) && (d1.width()-hero.position().left>400))
    				{
    					d1.css("left",(d1.position().left+speedXL)+"px");
					}
    		}
    		if(hero.position().left<($("#world").width()-hero.width()) && i==39 && mr==true)
    		{
    			hero.css("left",(hero.position().left+speedXR)+"px");
    			hero.css("background-position",-32*imageCounter+"px 0");
    			if((hero.position().left>$("#map").width()/2) && (d1.width()-hero.position().left>400)) 
    			{
    				d1.css("left",(d1.position().left-speedXR)+"px");		
    			}
    			if(hero.position().left>=$("#end").position().left && hero.position().top>=$("#end").position().top)
    			{
    				win=confirm("You Win!!!\nWood you like to reload the game?");
    				if(win)
    				{
    					location.reload();
    					break;
    				}
    				else
    				{
    					alert("Does not matter,RELOAD!!!");
    					location.reload();
    					break;
    				}
    			}
    		}
    		if(hero.position().top>0 && i==38 && jumpState==false)
    		{
    			jumpState=true;
    			hero.css("top",hero.position().top-speedY);
    		}
    	}
		chekCollision(koral);
    	chekCollision(floor);
    	chekColCoin(coin);
    	chekColEnemy(enemies);

    	jump();
    }
    var interval=setInterval(
    	function(){
    		move();
    		med1.move();
			med2.move();
			med3.move();
			med4.move();
			med5.move();

			dzuk1.move();
			dzuk1.move();
			dzuk2.move();
			dzuk3.move();
			dzuk4.move();
			dzuk5.move();
			dzuk6.move();

			spdzuk1.move();
			spdzuk2.move();
			spdzuk3.move();
			spdzuk4.move();
			spdzuk5.move();
			spdzuk6.move();
			spdzuk7.move();
			spdzuk8.move();
			spdzuk9.move();
			spdzuk10.move();
			spdzuk11.move();
			spdzuk12.move();

    	},20);

    function jump()
    {
        if (jumpState) 
        {
            if (speedY>-9)
            {
                speedY-=gravity;
            }
            hero.css("top",hero.position().top-speedY);
        }
    }
};