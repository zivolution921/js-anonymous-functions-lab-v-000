describe('Jukebox', function() {

  beforeEach(function() {
    setFixtures('<body><div><label for="menu" name="menu"><input type="button" id="menu" value="menu"><p id="menuOptions"></p></div><div><label for="play" name="play"><input type="button" id="play" value="play"><p id="songPlaying"></p></div><div><label for="pause" name="pause"><input type="button" id="pause" value="pause"><p id="songPaused"></p></div><div><label for="show" name="show"><input type="button" id="show" value="show"><p id="showSongs"></p></div></body>');
  });

  it('#menu binds a click event to the menu button', function() {
    menu();
    var menuButton = $('#menu')[0];
    var menuClickEvent = $._data(menuButton, "events");
    var myKey = [];
    for (var key in menuClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#menu shows the jukebox options in the browser', function() {
    menu();
    $('#menu').click();
    expect($('#menuOptions').text()).toEqual("You can play a song, pause a song, or view all the songs");
  });

  it('#play adds a click event to the play button', function() {
    play();
    var playButton = $('#play')[0];
    var playClickEvent = $._data(playButton, "events");
    var myKey = [];
    for (var key in playClickEvent){ myKey.push(key);}

    expect(myKey[0]).toEqual("click");
  });

  it('#play displays the song being played', function() {
    // var songToPlay = "halo";
    // var artist = "beyonce";
    play();
    $('#play').click();
    expect($('#songPlaying').text()).toMatch("now playing");
  });

  it('#pause adds a click event to the pause button', function() {
    pause();
    var pauseButton = $('#pause')[0];
    var pauseClickEvent = $._data(pauseButton, "events");
    var myKey = [];
    for (var key in pauseClickEvent){ myKey.push(key);}

    expect(myKey[0]).toEqual("click");
  });

  it('#pause displays the song being paused', function() {
    var songToPlay = "halo";
    pause();
    $("#pause").click();
    expect($('#songPaused').text()).toMatch("is paused");
  });

    it('#show adds a click event to the show button', function() {
    show();
    var showButton = $('#show')[0];
    var showClickEvent = $._data(showButton, "events");
    var myKey = [];
    for (var key in showClickEvent){ myKey.push(key);}

    expect(myKey[0]).toEqual("click");
  });

  it('#show displays the songs in the jukebox', function() {
    show();
    $('#show').click();
    expect($('#showSongs').text()).toEqual("in the clear by taylor swift is available to play. halo by beyonce is available to play. hotline bling by drake is available to play. ");
  });

});
