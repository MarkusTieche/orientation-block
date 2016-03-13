var orientationBlock = function(orientation,image){
  //orientation = DESIRED ORIENTATION
  //image = DISPLAY BLOCK IMGAGE

  //CHECK FOR MOBILE BROWSER
  if(cc.sys.isMobile && !cc.sys.isNative)
  {
    this.desiredOrientation = orientation;
    //ENABLE ORIENTATION BLOCK
    //CREATE ROTATIONBLOCK DIV
    this.rotationBlock = document.createElement("div");
        this.rotationBlock.id = "rotationBlock";
        this.rotationBlock.style.position = "absolute";
        // rotationBlock.style.backgroundColor = "#D93600"; //JUST A BACKGROUND COLOR
        this.rotationBlock.style.backgroundImage = "url('res/rotate.jpg')"; //BLOCKER IMAGE
        this.rotationBlock.style.backgroundSize = "cover"; //COVER FULL DIV WITH IMAGE
        this.rotationBlock.style.backgroundPosition = "center center"; //CENTER BG
        this.rotationBlock.style.position = "absolute"
        this.rotationBlock.style.top = "0"
        this.rotationBlock.style.left = "0"
        this.rotationBlock.style.zIndex = 100; //RENDER ON TOP
        this.rotationBlock.style.height = "100%"
        this.rotationBlock.style.width = "100%"
        this.rotationBlock.style.margin = "0 auto"

        //ADD ROTATIONBLOCK AS FIRST ELEMENT
        document.body.insertBefore(this.rotationBlock,document.body.firstChild);

        var that = this;
        //ADD ORIENTATION cHANGE EVENT
        window.addEventListener("orientationchange", function(){that.setRotationBlock()},false);

        //GET CURRENT ORIENTATION
        this.setRotationBlock()

  }
};

orientationBlock.prototype.setRotationBlock = function()
{
  if( this.getOrientation() == this.desiredOrientation)
  {
    //CORRECT ORIENTATION->UNBLOCK SCREEN,RESUME
    this.rotationBlock.style.display = "none";
    cc.director.resume();
  }
  else
  {
    //WRONG ORIENTATION ->BLOCK SCREEN,PAUSE
    this.rotationBlock.style.display = "block";
    cc.director.pause();
  }
}

orientationBlock.prototype.getOrientation = function()
{
  cc.log("getO")
  switch (window.orientation)
  {
    case 0:return "portrait";
    case 180:return "portrait";
    case 90:return "landscape";
    case -90:return "landscape";
  }
}

orientationBlock.prototype.changeOrientation = function(orientation)
{
  this.desiredOrientation = orientation;
  this.setRotationBlock()
}
