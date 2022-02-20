function start() {
    let root = document.documentElement;
    let game = {};
    
    $("#start").hide();
    
    $('body').css('backdrop-filter', 'none');
    $('body').css('background-image', 'none');
    $('body').css('background-color', 'black');
    
    createParallax();

    $('#background-game').append("<div id='player' class='animation-player'></div>");
    $('#background-game').append("<div id='friend' class='animation-friend'></div>");
    $('#background-game').append("<div id='enemy-1' class='animation-enemy-1'></div>");
    $('#background-game').append("<div id='enemy-2' class='animation-enemy-2'></div>");
    
    game.speed = 1;
    game.speedEnemy1 = 5;
    game.speedEnemy2 = 8;
    game.pressed = [];
    game.keyboard = {
        up: 87,
        down: 83,
        left: 65,
        right: 68,
        shoot: 32
    }
    game.screen = {
        width: document.getElementById('background-game').offsetWidth,
        height: document.getElementById('background-game').offsetHeight,
        widthEnemy1: document.getElementById('enemy-1').offsetWidth,
        widthEnemy2: document.getElementById('enemy-2').offsetWidth 
    };
    
    $(document).keydown(function(e){
        game.pressed[e.which] = true;
        game.pressed[0] = false;
    });

    $(document).keyup(function(e){
        game.pressed[e.which] = false;
        game.pressed[0] = true;

    });   

    game.timer= setInterval(() => loop(game), 30);
}

function loop(game){
    moveParallax('#parallax-6', game.speed + 1);
    moveParallax('#parallax-5', game.speed + 2);
    moveParallax('#parallax-4', game.speed + 3);
    moveParallax('#parallax-3', game.speed + 4);
    moveParallax('#parallax-2', game.speed + 5);
    moveParallax('#parallax-1', game.speed + 5);

    movePlayer(game);
    moveEnemy1(game);
    moveEnemy2(game);
}

function moveEnemy1(game) {

    let left = parseInt($('#enemy-1').css("left"));
    $('#enemy-1').css('left', left - game.speed - game.speedEnemy1);

    if (left <= 0){
        game.speedEnemy1 = parseInt(Math.random() * 15) + 1;
        $('#enemy-1').css('left', game.screen.width - game.screen.widthEnemy1);
    }
}

function moveEnemy2(game) {

    let left = parseInt($('#enemy-2').css("left"));
    $('#enemy-2').css('left', left - game.speed - game.speedEnemy2);    

    if (left <= 0){
        let height = parseInt(Math.random() * (game.screen.height));

        if (height > game.screen.height - 250){
            height = game.screen.height - 250
        } 
        console.log(game.screen.height, height);

        game.speedEnemy2 = parseInt(Math.random() * 15) + 3;
        $('#enemy-2').css('left', game.screen.width - game.screen.widthEnemy2);
        $('#enemy-2').css('top', height);
    }
}

function movePlayer(game){

    function moveToLeft(){
        let left = parseInt($('#player').css("left"));
        if (left > 0){
            $('#player').css('left', left - (5 * game.speed));
        }
    }

    if(game.pressed[0]){
        moveToLeft();
    }
    
    if(game.pressed[game.keyboard.up]){
        let top = parseInt($('#player').css("top"));
        if(top > 0){
            $('#player').css('top', top - 10);
        }
        moveToLeft();
    }

    if(game.pressed[game.keyboard.down]){
        let bottom = parseInt($('#player').css("top"));
        //Calculo do limite de acordo com a proporção do personagem mais a altura do solo
        if(bottom < game.screen.height - ((game.screen.height * 0.13) + 80)){
            $('#player').css('top', bottom + 10);
        }
        moveToLeft();
    }

    if(game.pressed[game.keyboard.left]){
        let left = parseInt($('#player').css("left"));
        if (left > 0){
            $('#player').css('left', left - 10);
        }
        moveToLeft();
    }

    if(game.pressed[game.keyboard.right]){
        let right = parseInt($('#player').css("left"));
        //Calculo do limite de acordo com a proporção do personagem
        if(right < game.screen.width - ((game.screen.width * 0.13))){
            $('#player').css('left', right + 10);
        }
    }
}

function moveParallax(id, speed){
    left = parseInt($(id).css('background-position'));
    $(id).css('background-position', left-speed);
}

function createParallax(){
    $('#background-game').append("<div id='parallax-7'></div>");    
    $('#parallax-7').append("<div id='parallax-6'></div>");
    $('#parallax-6').append("<div id='parallax-5'></div>");
    $('#parallax-5').append("<div id='parallax-4'></div>");
    $('#parallax-4').append("<div id='parallax-3'></div>");
    $('#parallax-3').append("<div id='parallax-2'></div>");
    $('#parallax-2').append("<div id='parallax-1'></div>");
    $('#parallax-1').append("<div id='blur'></div>");    
}