


function Pacman() 
{
    this.health = 1;
    this.width = 150;
    this.height = 30;
    this.directions = {};
    this.moveLeft = true;
    this.moveRight = true;
    this.moveUp = true;
    this.moveDown = true;

    this.speedX = 4;
    this.kpela = false;
    this.dynamic = $("#dynamic1");


    //console.log(that.dynamic.position().left);
        this.STATIC_HOR_CENTER = 0;
        this.STATIC_VER_CENTER = 0;

        this.WIDTH_DIFFERENCE = 0;
        this.HEIGHT_DIFFERENCE = 0;

        this.DYNAMIC_HOR_CENTER = 0;
        this.DYNAMIC_VER_CENTER = 0;

    this.count = 0;
    this.imageCounter = 1;
    var that = this;

    this.checkCollision = function()
    {
        for(var i in window["walls"])
        {
            that.STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
            that.STATIC_VER_CENTER = walls[i].position().top + walls[i].height()/2;
            that.WIDTH_DIFFERENCE = this.dynamic.width()/2 + walls[i].width()/2;
            that.HEIGHT_DIFFERENCE = this.dynamic.height()/2 + walls[i].height()/2;

            that.DYNAMIC_HOR_CENTER = this.dynamic.position().left + this.dynamic.width()/2;
            that.DYNAMIC_VER_CENTER = this.dynamic.position().top + this.dynamic.height()/2;

        if (Math.abs(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE && 
            Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)
            {
               if(lastDirection == "left"){
                    console.log("left");
                    that.moveLeft = false;
                    that.dynamic.css("left", (that.dynamic.position().left + that.speedX) + "px");


                   // break;
                    //console.log(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER);
               }
               if(lastDirection == "right"){
                    console.log("right");
                    that.moveRight = false;
                    that.dynamic.css("left", (that.dynamic.position().left - that.speedX) + "px");

                    console.log(that.moveRight)
                    
                   // break;
                    //console.log(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER);
               }
               if(lastDirection == "up"){
                    console.log("up");
                    that.moveUp = false;
                    that.dynamic.css("top", (that.dynamic.position().top + that.speedX) + "px");

                    //console.log(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER);
               }
               if(lastDirection == "down"){
                    console.log("down");
                    that.moveDown = false;
                    that.dynamic.css("top", (that.dynamic.position().top - that.speedX) + "px");

                    //console.log(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER);
               }

            }
            
            // if (Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)
            // {
            

            // }
        }

    }

 this.move = function() {

            if((that.count +=20)%200 == 0)
            {
                that.imageCounter = that.imageCounter ==1 ? 0 : 1;
                //console.log(imageCounter);
            }

            for (var i in that.directions)
            {
            
                if ( that.dynamic.position().left > 0 && i == 37 && that.moveLeft) {
                //console.log("text");
                that.moveRight = true;
                that.moveDown = true;
                that.moveUp = true;
                $("#dynamic1").css({
                    "left": (that.dynamic.position().left - that.speedX) + "px",
                    "background-image": "url(\"images/animation.png\")",
                    "background-position": (40*that.imageCounter) + "px 80px",
                    "background-size" : "80px 160px"

                });
               
                lastDirection = "left";
                break;
               /* $("#dynamic1").attr("src", "images/animation.png");    
                that.dynamic.css("left", (that.dynamic.position().left - that.speedX) + "px");
                lastDirection = "left";
                that.dynamic.css("background-position", 0 + 33*that.imageCounter + "px 96");*/
            }

            if ( /*that.dynamic.position().left < ($("#mainwall").width() - that.dynamic.width()) &&*/  i == 39 && that.moveRight) {
                //console.log("text");
                that.moveLeft = true;
                that.moveDown = true;
                that.moveUp = true;
                $("#dynamic1").css({
                    "left": (that.dynamic.position().left + that.speedX) + "px",
                    "background-image": "url(\"images/animation.png\")",
                    "background-position": (40*that.imageCounter) + "px 0px",
                    "background-size" : "80px 160px"
                });
               
                lastDirection = "right";
              break;
            }

            if ( that.dynamic.position().top > 0 && i == 38 && that.moveUp == true ) {
                //console.log("tex22");
                that.moveLeft = true;
                that.moveRight = true;
                that.moveDown = true;
                 $("#dynamic1").css({
                    "background-image": "url(\"images/animation.png\")",
                    "top": (that.dynamic.position().top - that.speedX) + "px",
                    "background-position": (40*that.imageCounter) + "px 40px",
                    "background-size" : "80px 160px"
                });
                lastDirection = "up";
                break;
                /*that.dynamic.css("background-image", "url:(\"images/animation.png\")");
                that.dynamic.css("top", (that.dynamic.position().top - that.speedX) + "px");
                that.dynamic.css("background-position", 0 + 33*that.imageCounter + "px 124");
                lastDirection = "up";*/
                
            }


            if (/*that.dynamic.position().top < ($("#mainwall").height() - that.dynamic.height()) &&*/ i == 40 && that.moveDown == true ) {
                //console.log("tex22");
                    that.moveLeft = true;
                    that.moveRight = true;
                    that.moveUp = true;
                $("#dynamic1").css({
                    "background-image": "url(\"images/animation.png\")",
                    "top": (that.dynamic.position().top + that.speedX) + "px",
                    "background-position": (40*that.imageCounter) + "px 120px",
                    "background-size" : "80px 160px"
                });
                lastDirection = "down";
                break;
                /*$("#dynamic1").attr("src", "images/animation.png");
                that.dynamic.css("top", (that.dynamic.position().top + that.speedX) + "px");
                lastDirection = "down";
                that.dynamic.css("background-position", 0 + 33*that.imageCounter + "px 64");*/
            }
        }
        that.checkCollision();
    }
}



function Enemy1() 
{

    this.speed = 5;
    this.width = "150px"
    this.height = "35px";

    //console.log(that.enemy1.position().left);

    this.directions = {};
    var random = Math.floor(Math.random() * 4) + 1  ;
    this.moveLeft = true;
    this.moveRight = true;
    this.moveUp = true;
    this.moveDown = true;
    var that = this;

    console.log(random);

    this.enemy1 = $("#enemy1");
    that.enemy1.css({
        "position":"absolute"
    });
    console.log(that.enemy1.position());

    this.checkCollision = function()
    {
        for(var i in window["walls"])
        {
            that.STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
            that.STATIC_VER_CENTER = walls[i].position().top + walls[i].height()/2;
            that.WIDTH_DIFFERENCE = this.enemy1.width()/2 + walls[i].width()/2;
            that.HEIGHT_DIFFERENCE = this.enemy1.height()/2 + walls[i].height()/2;

            that.DYNAMIC_HOR_CENTER = this.enemy1.position().left + this.enemy1.width()/2;
            that.DYNAMIC_VER_CENTER = this.enemy1.position().top + this.enemy1.height()/2;

        if (Math.abs(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE && 
            Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)
            {
               if(lastDirection == "left"){
                    console.log("left");
                    that.moveLeft = false;
                    that.enemy1.css("left", (that.enemy1.position().left + that.speedX) + "px");


                   // break;
                    //console.log(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER);
               }
               if(lastDirection == "right"){
                    console.log("right");
                    that.moveRight = false;
                    that.enemy1.css("left", (that.enemy1.position().left - that.speedX) + "px");

                    console.log(that.moveRight)
                    
                   // break;
                    //console.log(that.DYNAMIC_HOR_CENTER - that.STATIC_HOR_CENTER);
               }
               if(lastDirection == "up"){
                    console.log("up");
                    that.moveUp = false;
                    that.enemy1.css("top", (that.enemy1.position().top + that.speedX) + "px");

                    //console.log(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER);
               }
               if(lastDirection == "down"){
                    console.log("down");
                    that.moveDown = false;
                    that.enemy1.css("top", (that.enemy1.position().top - that.speedX) + "px");

                    //console.log(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER);
               }

            }
            
            // if (Math.abs(that.DYNAMIC_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)
            // {
            

            // }
        }

    }




    this.move = function() {

            for (var i in that.directions)
            {
            
                if ( that.enemy1.position().left > 0 && i == 37 && that.moveLeft) {
                //console.log("text");
                that.moveRight = true;
                that.moveDown = true;
                that.moveUp = true;
                $("#enemy1").css({
                    "left": (that.enemy1.position().left - that.speedX) + "px",
                    "background-image": "url(\"images/enemy.png\")",

                });
               
                lastDirection = "left";
                break;
               /* $("#enemy1").attr("src", "images/enemy.png");    
                that.enemy1.css("left", (that.enemy1.position().left - that.speedX) + "px");
                lastDirection = "left";
                that.enemy1.css("background-position", 0 + 33*that.imageCounter + "px 96");*/
            }

            if ( /*that.enemy1.position().left < ($("#mainwall").width() - that.enemy1.width()) &&*/  i == 39 && that.moveRight) {
                //console.log("text");
                that.moveLeft = true;
                that.moveDown = true;
                that.moveUp = true;
                $("#enemy1").css({
                    "left": (that.enemy1.position().left + that.speedX) + "px",
                    "background-image": "url(\"images/enemy.png\")",
                });
               
                lastDirection = "right";
              break;
            }

            if ( that.enemy1.position().top > 0 && i == 38 && that.moveUp == true ) {
                //console.log("tex22");
                that.moveLeft = true;
                that.moveRight = true;
                that.moveDown = true;
                 $("#enemy1").css({
                    "background-image": "url(\"images/enemy.png\")",
                    "top": (that.enemy1.position().top - that.speedX) + "px",
                });
                lastDirection = "up";
                break;
                /*that.enemy1.css("background-image", "url:(\"images/enemy.png\")");
                that.enemy1.css("top", (that.enemy1.position().top - that.speedX) + "px");
                that.enemy1.css("background-position", 0 + 33*that.imageCounter + "px 124");
                lastDirection = "up";*/
                
            }


            if (/*that.enemy1.position().top < ($("#mainwall").height() - that.enemy1.height()) &&*/ i == 40 && that.moveDown == true ) {
                //console.log("tex22");
                    that.moveLeft = true;
                    that.moveRight = true;
                    that.moveUp = true;
                $("#enemy1").css({
                    "background-image": "url(\"images/enemy.png\")",
                    "top": (that.enemy1.position().top + that.speedX) + "px",
                });
                lastDirection = "down";
                break;
                /*$("#dynamic1").attr("src", "images/enemy.png");
                that.enemy1.css("top", (that.enemy1.position().top + that.speedX) + "px");
                lastDirection = "down";
                that.enemy1.css("background-position", 0 + 33*that.imageCounter + "px 64");*/
            }
        }
        that.checkCollision();
    }

   
}
function Enemy2() 
{
    this.health = //while(this.health = false){
        "immortal";
    //};
    this.speed = 5;
    this.width = "150px"
    this.height = "35px";
    this.enemy2 = $("#enemy2");


   
}
function Enemy3() 
{
    this.health = //while(this.health = false){
        "immortal";
    //};
    this.speed = 5;
    this.width = "150px"
    this.height = "35px";
    this.enemy3 = $("#enemy3");

   
}


