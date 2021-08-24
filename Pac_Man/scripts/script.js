$(document).ready(function() {
    var p = $("<p/>")
    var d = $("<div/>").appendTo("body");
    var i = $("<img/>")
    var i2 = $("<img/>")
    var b = $("<button/>")
    var b1 = $("<button/>")
    var b2 = $("<button/>")
    var b3 = $("<button/>")
    var a = $("<audio/>").appendTo("body");
    /*var d2 = $("<div/>").attr("class", "guin").attr("id", "div1").appendTo("body");
    var d3 = $("<div/>").attr("class", "guin2").attr("id", "div2").appendTo("body");
    var d4 = $("<div/>").attr("class", "guin").attr("id", "div3").appendTo("body");
    var d5 = $("<div/>").attr("class", "guin").attr("id", "div4").appendTo("body"); */
    b1.text("START PLAY");
    b2.text("Options");
    b3.text("Volume");
    d.attr("id", "back");
    d.attr("id", "level")

    b1.attr("id", "btn1");
    b2.attr("id", "btn2");
    b3.attr("id", "btn3");

    d.append(b1);
    d.append(b2);
    d.append(b3);

    d.css({

        "width": "1600px",
        "height": "900px",
        "background-image": "url('images/menu4.png')",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
        "background-position": "center"
    });


    p.css({

        "color": "yellow",
        "display": "inline",

    });

    b1.css({
        "position": "absolute",
        "display": "block",
        "width": "150px",
        "height": "30px",
        "top": "725px",
        "left": "690px",
    });

    b2.css({
        "position": "absolute",
        "display": "block",
        "width": "150px",
        "height": "30px",
        "top": "770px",
        "left": "690px",
    });

    b3.css({
        "position": "absolute",
        "display": "block",
        "width": "60px",
        "height": "50px",
        "top": "750px",
        "left": "500px",
    });

    var clickSound = $("<audio/>").appendTo("body");
    clickSound[0].src = "horse.mp3";
    clickSound[0].play();

    b3.click(function() {

        if (b3.text() == "Volume") 
        {

            clickSound[0].pause();
            b3.text("Pause");

        } 
        else if (b3.text() == "Pause") 
        {

            clickSound[0].play();
            b3.text("Volume");
        }
    });

    var img = $("<img/>").appendTo("body");
    var img2 = $("<img/>").appendTo("body");
    d.append(img);
    d.append(img2);

    var enemyimg = $("<img/>").appendTo("body");
    var enemyimg2 = $("<img/>").appendTo("body");
    var enemyimg3 = $("<img/>").appendTo("body");
    var enemyimg4 = $("<img/>").appendTo("body");

    d.append(enemyimg);
    d.append(enemyimg2);
    d.append(enemyimg3);
    d.append(enemyimg4);



    enemyimg.attr("src", "images/enemy.png");
    enemyimg.attr("id", "enemy");
    enemyimg2.attr("src", "images/enemy3.png");
    enemyimg2.attr("id", "enemy2");
    enemyimg3.attr("src", "images/enemy.png");
    enemyimg3.attr("id", "enemy3");
    enemyimg4.attr("src", "images/enemy3.png");
    enemyimg4.attr("id", "enemy4");

    b1.click(function() {

        $("body").empty();
        level();

    })

});