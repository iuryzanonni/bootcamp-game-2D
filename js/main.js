function start() {
    let game = {};
    let speed = 1;

    game.keyboard = {
        up: 87,
        down: 83,
        left: 65,
        right: 68,
        shoot: 32
    }

    $("#start").hide();

    $('body').css('backdrop-filter', 'none');
    $('body').css('background-image', 'none');
    $('body').css('background-color', 'black');

    createParallax();

    $('#background-game').append("<div id='player' class='animationplayer'></div>");
    $('#background-game').append("<div id='friend' class='animationfriend'></div>");
    $('#background-game').append("<div id='enemy-1'></div>");
    $('#background-game').append("<div id='enemy-2'></div>");

    game.pressed = [];
    
    $(document).keydown(function(e){ 
        game.pressed[e.which] = true;
    });

    $(document).keyup(function(e){
        game.pressed[e.which] = false;
    });

    game.timer= setInterval(() => loop(game,speed), 30);
}

function movePlayer(game){
    
    if(game.pressed[game.keyboard.up]){
        let top = parseInt($('#player').css("top"));
        if(top > 0){
            $('#player').css('top', top - 10);
        }
    }

    if(game.pressed[game.keyboard.down]){
        let bottom = parseInt($('#player').css("top"));
        if(bottom < 850){
            $('#player').css('top', bottom + 10);
        }
    }

    if(game.pressed[game.keyboard.left]){
        let left = parseInt($('#player').css("left"));
        if (left > 0){
            $('#player').css('left', left - 10);
        }
    }

    if(game.pressed[game.keyboard.right]){
        let right = parseInt($('#player').css("left"));
        if(right < 1700){
            $('#player').css('left', right + 10);
        }
    }
}

function loop(game, speed = 0){
    moveParallax('#parallax-6', speed + 1);
    moveParallax('#parallax-5', speed + 2);
    moveParallax('#parallax-4', speed + 3);
    moveParallax('#parallax-3', speed + 4);
    moveParallax('#parallax-2', speed + 5);
    moveParallax('#parallax-1', speed + 5);

    movePlayer(game);
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