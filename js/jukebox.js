$(document).ready(function(){

  // menu();
  // play();
  // pause();
  // show();


});

  var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
  var artists = Object.keys(jukeboxSongs);
  //look at generating a random number - Math.floor(Math.random()) is always generating 0 
  var theArtist = artists[Math.floor(Math.random()*artists.length)];
  var songToPlay = jukeboxSongs[theArtist];


  function menu(){
    $('#menu').on('click', function(){
      $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
    });
  }


  function play(){
    $('#play').on('click', function(){
      $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
    });
  }

  function pause(){
    $('#pause').on('click', function(){
      $('#songPaused').html(songToPlay + " is paused");
    });
  }

  function show(){
    $('#show').on('click', function(){
      var songs = "";
      for (var key in jukeboxSongs) {
        songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
      }
      $('#showSongs').html(songs);
    });
  }

