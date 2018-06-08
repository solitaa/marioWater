function Enemy(n,l,t,nu){
	this.name=n;
	this.lp=l;
	this.tp=t;
	this.numb=nu;
	this.speed=4;
	this.imageCounter = 0;
	this.count=0;
	this.area=$("<div/>").css({

		"left":this.lp +"px",
		"top":this.tp+"px"
	});

	if(this.name=="meduza")
	{
		this.area.attr({"id":"meduza"+this.numb,"class":"meduza"}).appendTo("#world");

		this.move=function(){
			if((this.count+=20)%500==0)
			{
				this.imageCounter=this.imageCounter== 1 ? 0 : (this.imageCounter + 1);
			}
			this.area.css("background-position",32*this.imageCounter+"px 0");
			this.area.css("top",(this.area.position().top+this.speed)+"px");
			if(this.area.position().top+this.area.height()>=$("#world").height()-32)
			{
				this.speed=-4;
			}
			else if(this.area.position().top<=$("#world").position().top-32)
			{
				this.speed=4;
			}
		}
		
		
	}
	else if(this.name=="dzuk")
	{
		this.area.attr({"id":"dzuk"+this.numb,"class":"dzuk"}).appendTo("#world");		
		this.move=function(){
			if((this.count+=20)%400==0)
			{
				this.imageCounter=this.imageCounter== 1 ? 0 : (this.imageCounter + 1);
			}
			this.area.css("background-position",33*this.imageCounter+"px 0");
			if(this.area.position().left-$("#hero").position().left<=600)
			{
				this.area.css("left",(this.area.position().left-this.speed)+"px");
			}
		}
	}
	else
	{
		this.area.attr({"id":"spdzuk"+this.numb,"class":"spdzuk"}).appendTo("#world");
		
		this.move=function(){
			if((this.count+=20)%400==0)
			{
				this.imageCounter=this.imageCounter== 1 ? 0 : (this.imageCounter + 1);
			}
			this.area.css("background-position",33*this.imageCounter+"px 0");
			if(this.area.position().left-$("#hero").position().left<=600)
			{
				this.area.css("left",(this.area.position().left-this.speed)+"px");
			}
		}
	}
/*
	this.destroy=function(){
		this.area.remove();
	}
*/
}
