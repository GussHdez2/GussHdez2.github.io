var tipoCuenta;
    $.ajax({
            type: "GET",
            url: "globalSemaforo.php",
            dataType : 'json',
            success: function(result) {

                tipoCuenta = result['tipoUser'];
                if (result['tipoUser'] == "juez"){    
                    $('.btnJudge').css("display","block");
                    $('.btnPlay').css("display","none");
                    $('.buttonExitCombat').css("display",'none');
                }
                else if (result['tipoUser'] == "admin"){
                    $('.btnPlay').css("display","block");
                    $('.btnJudge').css("display","none");
                    $('.buttonExitCombat').css("display",'block');
                }
                else {
                    $('.btnPlay').css("display","none");
                    $('.btnJudge').css("display","none");
                    $('.buttonExitCombat').css("display",'none');
                }
            }
        });

var finalizarGrafica = "";
var puntajeAzul = 0;
var puntajeRojo = 0;

var videoRojoParam = '';
var videoAzulParam = '';
var tipoContiendaParam = '';


$(document).on('keypress',function(e) {
    /*
    if(e.which == 13) {
        alert('You pressed enter!');
    }
    */
    if (tipoCuenta == 'admin' ){
        if (e.which == 122){
            puntajeAzul += 1;
            $.post("combatePuntosAzul.php",  { puntosAzul: puntajeAzul } );
        }

        if (e.which == 120){
            puntajeAzul += 2;
            $.post("combatePuntosAzul.php",  { puntosAzul: puntajeAzul } );
        }

        if (e.which == 99){
            puntajeAzul += 3;
            $.post("combatePuntosAzul.php",  { puntosAzul: puntajeAzul } );
        }

        if (e.which == 98){
            puntajeRojo += 1;
            $.post("combatePuntosRojo.php",  { puntosRojo: puntajeRojo } );
        }

        if (e.which == 110){
            puntajeRojo += 2;
            $.post("combatePuntosRojo.php",  { puntosRojo: puntajeRojo } );
        }

        if (e.which == 109){
            puntajeRojo += 3;
            $.post("combatePuntosRojo.php",  { puntosRojo: puntajeRojo } );
        }
    }
});

$('#btnRed').on('click', function(){
    $.ajax({
       url: 'votacionRojo.php',
       success: function () {
       }
    });
});

$('#btnBlue').on('click', function(){
    $.ajax({
       url: 'votacionAzul.php',
       success: function () {
       }
    });
});

var flagLeft = 0;
var flagRight = 0;
var interval = null;
var intervalCombat = null;
var flagActivarVideo = 0;

function updateCombat() {
    $.ajax({
       type: "GET",
       url: 'datoCombate.php',
       dataType: 'json',
       success: function (result) {
            if (result['combateActivado'] == 0){
                $('.imgScreenStageCombat').hide(500, function(){
                    $('.imgScreenStage').show(500);    
                });
            }

            if (result['combateActivado'] == 1){
                $('.imgScreenStage').hide(500, function(){
                    $('.imgScreenStageCombat').show(500);    
                });
            }



            $('.puntajeAzul').html(result['puntajeAzul']);
            $('.puntajeRojo').html(result['puntajeRojo']);
       }
    });
}

intervalCombat = setInterval(updateCombat, 500);


function updateGraphics(){

    $.ajax({
            type: "GET",
            url: "datoContienda.php",
            dataType : 'json',
            success: function(result) {

                if (result['tipoContienda'] == 'combate' && result['combateActivado'] == 1){
                    $('.imgScreenStage').hide(500, function(){
                        $('.imgScreenStageCombat').show(500);    
                    });
                    
                } else {
                    $('.imgScreenStageCombat').hide(500, function(){
                        $('.imgScreenStage').show(500);    
                    });

                    $('.imgScreenStageVelas').css('display','none');
                }

                if(result['mostrarVideo'] == 1){
                    //$(".videoRojo").html(''+ result['urlVideoRojo']);
                    //$(".videoAzul").html(''+ result['urlVideoAzul']);
                    //$(".videoCombate").html(''+ result['urlVideoRojo']);
                    $('.imgStand').css('display','none');
                    $.ajax({
                       url: 'subirVideos2.php',
                       success: function () {
                       }
                    });
                }

                if(result['activarVideo'] == 1){
                    $('.imgStand').css('display','none');

                    if ($('#embedVideoAzul').length){

                    } else {
                        $('.videoAzul').append('<div id="embedVideoAzul"></div>');   
                    }

                    if ($('#embedVideoRojo').length){

                    } else {
                        $('.videoRojo').append('<div id="embedVideoRojo"></div>');   
                    }

                    if ($('#embedVideoCombate').length){

                    } else {
                        $('.videoCombate').append('<div id="embedVideoCombate"></div>');   
                    }

                    if (result['tipoContienda'] == 'velas'){
                        $('.imgScreenStageVelas').css('display','block');    
                        
                        
                    }

                   videoRojoParam = result['urlVideoRojo'];
                   videoAzulParam = result['urlVideoAzul'];
                   tipoContiendaParam = result['tipoContienda'];
                   flagActivarVideo = 1;
                    activateYoutube();
                    /*
                    $.ajax({
                       url: 'activarVideo2.php',
                       success: function () {
                       }
                    });
                    */
                } else if (result['activarVideo'] == 0){
                    $('#embedVideoRojo').remove();
                    $('#embedVideoAzul').remove();
                    $('#embedVideoCombate').remove();


                    $('.imgStand').css('display','flex');
                }

                $('#nombreJuez1').html(result['juez1Contienda']);
                $('#nombreJuez2').html(result['juez2Contienda']);
                $('#nombreJuez3').html(result['juez3Contienda']);

                $('.nameCompetidor1').html(result['competidor1Contienda']);
                $('.nameCompetidor2').html(result['competidor2contienda']);
                
                if (result['juez1VotoContienda'] == "azul"){
                    $('#juez1').attr("src","../assets/juez_leftH.png");
                    flagLeft += 1;
                } 

                if (result['juez1VotoContienda'] == "rojo"){
                    $('#juez1').attr("src","../assets/juez_rightH.png");
                    flagRight += 1;
                }

                if (result['juez1VotoContienda'] == "cero"){
                    $('#juez1').attr("src","../assets/juez.png");
                }

                if (result['juez2VotoContienda'] == "azul"){
                    $('#juez2').attr("src","../assets/juez_leftH.png");
                    flagLeft += 1;
                } 

                if (result['juez2VotoContienda'] == "rojo"){
                    $('#juez2').attr("src","../assets/juez_rightH.png");
                    flagRight += 1;
                }

                if (result['juez2VotoContienda'] == "cero"){
                    $('#juez2').attr("src","../assets/juez.png");
                }

                if (result['juez3VotoContienda'] == "azul"){
                    $('#juez3').attr("src","../assets/juez_leftH.png");
                    flagLeft += 1;
                } 

                if (result['juez3VotoContienda'] == "rojo"){
                    $('#juez3').attr("src","../assets/juez_rightH.png");
                    flagRight += 1;
                }

                if (result['juez3VotoContienda'] == "cero"){
                    $('#juez3').attr("src","../assets/juez.png");
                }
                
                if (flagLeft >= 2){
                    $('.juezCentral').attr('src','../assets/juezCentral_leftH.png');
                    flagLeft = 0;
                    flagRight = 0;
                    $.ajax({
                       url: 'setCompetencia.php',
                       success: function () {
                        setTimeout(function (){
                            $('#juez1').attr("src","../assets/juez.png");
                            $('#juez2').attr("src","../assets/juez.png");
                            $('#juez3').attr("src","../assets/juez.png");
                            $('.juezCentral').attr("src","../assets/juezCentral.png");
                        }, 6500);
                       }
                    });
                }

                if (flagRight >= 2){
                    $('.juezCentral').attr('src','../assets/juezCentral_rightH.png');
                    flagRight = 0;
                    flagLeft = 0;
                    $.ajax({
                       url: 'setCompetencia.php',
                       success: function () {
                        setTimeout(function (){
                            $('#juez1').attr("src","../assets/juez.png");
                            $('#juez2').attr("src","../assets/juez.png");
                            $('#juez3').attr("src","../assets/juez.png");
                            $('.juezCentral').attr("src","../assets/juezCentral.png");
                        }, 6500);
                       }
                    });
                }
            }
          });

        $.ajax({
            type: "GET",
            url: "listaContienda.php",
            dataType : 'json',
            success: function(result) {
                console.log(result);
            }

        });
    }
 
    interval = setInterval(updateGraphics, 500);

    function uploadVideo(){
        $('.imgStand').hide();
        $.ajax({
           url: 'subirVideos.php',
           success: function () {
           }
        });
    }

    $('#btnPlayCont2').on('click', function(ev) {

        $.ajax({
           url: 'activarVideo.php',
           success: function () {
           }
        });
     
    });

    $('#btnStop').on('click', function(){
        puntajeRojo = 0;
        puntajeAzul = 0;
        $.ajax({
           url: 'activarVideo2.php',
           success: function () {
           }
        });
    })

    $('.buttonExitCombat').on('click', function(){
        puntajeRojo = 0;
        puntajeAzul = 0;
        flagActivarVideo = 0;
        $.ajax({
           url: 'stopCombate.php',
           success: function () {
            
           }
        });
    });

    $('#btnUploadCombat').on('click', function(){
        puntajeRojo = 0;
        puntajeAzul = 0;
        $.ajax({
           url: 'activarCombate.php',
           success: function () {
            
           }
        });
    });

    var videoAzul;
    var videoRojo;
    var videoInterval = null;

    function activateYoutube() {
        if (flagActivarVideo ==1){
            
        if (tipoContiendaParam == "gumbup"){

            console.log ('Activando gumbup...');
              // 3. This function creates an <iframe> (and YouTube player)
              //    after the API code downloads.
              var playerRojo;
              playerRojo = new YT.Player('embedVideoRojo', {
                  height: '360',
                  width: '640',
                  videoId: ''+videoRojoParam,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });

              videoRojo = playerRojo;

              var playerAzul;
              playerAzul = new YT.Player('embedVideoAzul', {
                  height: '360',
                  width: '640',
                  videoId: ''+videoAzulParam,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });

              videoAzul = playerAzul;

              // 4. The API will call this function when the video player is ready.
              function onPlayerReady(event) {
                event.target.playVideo();
              }

              function onPlayerStateChange(event) {
                
              }

              function stopVideo() {
                player.stopVideo();
              }



              //videoInterval = setInterval(autoLoopPlay,500);

        } else if (tipoContiendaParam == "velas"){


            console.log('Activando velas...')
              // 3. This function creates an <iframe> (and YouTube player)
              //    after the API code downloads.
              var playerRojo;
              playerRojo = new YT.Player('embedVideoRojo', {
                  height: '360',
                  width: '640',
                  videoId: ''+videoRojoParam,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });

              var playerAzul;
              playerAzul = new YT.Player('embedVideoAzul', {
                  height: '360',
                  width: '640',
                  videoId: ''+videoAzulParam,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });

              videoRojo = playerRojo;
              videoAzul = playerAzul;

              //videoInterval = setInterval(autoLoopPlay,500);

              // 4. The API will call this function when the video player is ready.
              function onPlayerReady(event) {
                event.target.playVideo();
              }

              function onPlayerStateChange(event) {
                
              }

              function stopVideo() {
                player.stopVideo();
              }


        } else if (tipoContiendaParam == "combate"){


            console.log('Activando combate...')
              // 3. This function creates an <iframe> (and YouTube player)
              //    after the API code downloads.
              var playerRojo;
                playerRojo = new YT.Player('embedVideoCombate', {
                  height: '720',
                  width: '100%',
                  videoId: ''+videoRojoParam,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });

                videoRojo = playerRojo;
                videoAzul = null;

                //videoInterval = setInterval(autoLoopPlay,500);
              

              function onPlayerReady(event) {
                event.target.playVideo();
              }

              function onPlayerStateChange(event) {
              }

              function stopVideo() {
                player.stopVideo();
              }

        }
        
    }

    }

    function autoLoopPlay(){
        while(flagActivarVideo == 1){
            if (videoRojo != null){
                videoRojo.player.playVideo();
            }

            if (videoAzul != null) {
                videoAzul.player.playVideo();    
            }
            
        }

        if (flagActivarVideo == 0){
            videoInterval = null;
        }
    }


    /*
    var req = new XMLHttpRequest();
    req.open('GET', '../assets/video1.mp4', true);
    req.responseType = 'blob';
    var video = $('.videoRojo');

    req.onload = function() {
       // Onload is triggered even on 404
       // so we need to check the status code
       if (this.status === 200) {
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          video.attr('src',vid);
       }
    }
    req.onerror = function() {
       // Error
    }

    req.send();

    var req2 = new XMLHttpRequest();
    req2.open('GET', '../assets/video2.mp4', true);
    req2.responseType = 'blob';
    var video2 = $('.videoAzul');

    req2.onload = function() {
       // Onload is triggered even on 404
       // so we need to check the status code
       if (this.status === 200) {
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          video2.attr('src',vid);
       }
    }
    req2.onerror = function() {
       // Error
    }

    req2.send();

    */