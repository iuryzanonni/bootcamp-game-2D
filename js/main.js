function start() {
    $("#start").hide();
    
    let body = document.getElementsByTagName('body');
    body[0].style.backdropFilter = 'none';

    $('#background-game').append("<div id='player'></div>");
    $('#background-game').append("<div id='enemy-1'></div>");
    $('#background-game').append("<div id='enemy-2'></div>");
    $('#background-game').append("<div id='friend'></div>");
}
