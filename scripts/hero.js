function Hero(){
	this.lp=64;
	this.tp=0;
	this.marioImage=$("<div/>").css({
		"left":this.lp +"px",
		"top":this.tp+"px"
	}).attr("id","hero").appendTo("#world");
	this.Lives=3;
	this.lose=function()
	{
		this.Lives-=1;
		$("#lives").text("Lives:"+this.Lives);
		if(this.Lives==0){
			alert("Game Over!!!");
			location.reload();
		}
	}
	this.Health=1;
	this.Coins=0;
	this.CoinUp=function(){
		this.Coins+=1;
		$("#coins").text("Coins:"+this.Coins);
		if(this.Coins==100)
		{
			this.Coins=0;
			this.Lives+=1;
			$("#lives").text("Lives:"+this.Lives);
		}
	};
    this.live=$("<p/>").text("Lives:"+this.Lives).attr("id","lives").css({
    	"position":"absolute",
    	"top":"-10px",
    	"left":"700px"
    }).appendTo(map);
     this.coin=$("<p/>").text("Coins:"+this.Coins).attr("id","coins").css({
    	"position":"absolute",
    	"top":"10px",
    	"left":"700px"
    }).appendTo(map);
	
}