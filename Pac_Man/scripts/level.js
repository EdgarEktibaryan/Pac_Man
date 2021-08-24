function level() {

    //var map = $("<div/>").appendTo("body");
    var pacman1 = $("<div/>")
    var enemy1 = $("<div/>")
    var enemy2 = $("<div/>")
    var enemy3 = $("<div/>")
    var mainwall =$("<div/>").appendTo("body");
    mainwall.css({
        "position":"absolute",
    });

    var lastDirection = "down";
    var count = 0;
    var imageCounter = 1;

    window["walls"] =[];
    for(var i = 1;i<56;i++)
    {
         walls[i]=$("<div/>").attr("class","woll"+i);
         mainwall.append(walls[i]);


    }

    pacman1.attr("id", "dynamic1");
    pacman1.css({
        "position":"absolute"
    });
    enemy1.attr("class", "enemy1");
    enemy1.css({
        "position":"absolute",
    });
    enemy2.attr("class", "enemy2");
    enemy2.css({
        "position":"absolute",

    });
    enemy3.attr("class", "enemy3");
    enemy3.css({
        "position":"absolute",

    });
    mainwall.attr("id","mainwal");


    mainwall.append(pacman1);
    mainwall.append(enemy1);
    mainwall.append(enemy2);
    mainwall.append(enemy3);

    var pacman = new Pacman();
    var enemy1 = new Enemy1();
    var enemy2 = new Enemy2();
    var enemy3 = new Enemy3();

   




    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        pacman.directions[e.which] = true;
    }

    function stop(e) {

        delete pacman.directions[e.which];
    }

    var interval = setInterval(pacman.move, 20);





        $('html').keyup(stop).keydown(charMovement);

    function charMovement1(e) {
        enemy1.directions[e.which] = true;
    }

    function stop1(e) {

        delete enemy1.directions[e.which];
    }

    var interval = setInterval(enemy1.move, 20);




        $('html').keyup(stop).keydown(charMovement);

    function charMovement2(e) {
        enemy2.directions[e.which] = true;
    }

    function stop2(e) {

        delete enemy2.directions[e.which];
    }

    var interval = setInterval(enemy2.move, 20);




        $('html').keyup(stop).keydown(charMovement);

    function charMovement3(e) {
        enemy3.directions[e.which] = true;
    }

    function stop3(e) {

        delete enemy3.directions[e.which];
    }

    var interval = setInterval(enemy3.move, 20);


}




