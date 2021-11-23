<?php
    session_start();
?>

<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- CSS only -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h" rel="stylesheet" />
        <link rel="stylesheet" href="css/estilosStage.css">
    </head>

    <body class="mainContent" style="margin: 0;">  
    <div class="content-fluid">
        <img class="bgStageImg" src="assets/coliseo_fondo.png">
        <img class="bgStageImg2" src="assets/coliseo_tribunas.png">  
         <div class="row formContent">

            <!--
            <div class="col-12 text-center infoStage">
                 <span id="numeroGrafica" class="graficaStage">GRAFICA 3</span>
                <span id="numeroContienda" class="contiendaStage">CONTIENDA 7</span>
            </div>
            -->

            <div class="col-12 py-3"></div>
            <div class="col-6 p-4 imgScreenStage">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="nameCompetidores nameCompetidor1">Competidor Rojo</h3>    
                    </div>

                    <div class="col-12 text-center videoRojo">
                        <img class="imgStand">

                        <div class="col-12 p-4 text-center imgScreenStageVelas">
                            <div class="row tipoVelas velasAzul">
                                <div class="col-6 pr-5">
                                    <img src="assets/azulP.png" class="marcadores">
                                    <span class="puntajeMarcador puntajeAzul puntajeVelas">0</span>
                                </div>
                            </div>

                        </div>

                        <div id="embedVideoRojo"></div>
                    </div>

                </div>
            </div>
             
            <div class="col-6 p-4 imgScreenStage"> 
                <div class="row azulStage">
                    <div class="col-12">
                        <h3 class="nameCompetidores nameCompetidor2">Competidor Azul</h3>    
                    </div>

                    <div class="col-12 videoAzul">
                        <img class="imgStand">

                        <div class="col-12 p-4 text-center imgScreenStageVelas">
                            <div class="row tipoVelas velasRojo">
                                <div class="col-6 pl-5">
                                    <img src="assets/rojoP.png" class="marcadores">
                                    <span class="puntajeMarcador puntajeRojo">0</span>
                                </div>
                            </div>

                        </div>
                        <div id="embedVideoAzul"></div>
                    </div>

                </div>   
            </div>

            <div class="col-12 p-4 text-center imgScreenStageCombat">
                <div class="row headerMarcadores">
                    <button class="btn lead buttonExitCombat"><i class="fas fa-times"></i></button>
                    <div class="col-6 pr-5 text-right">
                        <img src="assets/azulP.png" class="marcadores">
                        <span class="puntajeMarcador puntajeAzul">0</span>
                    </div>
                    <div class="col-6 pl-5 text-left">
                        <img src="assets/rojoP.png" class="marcadores">
                        <span class="puntajeMarcador puntajeRojo">0</span>
                    </div>
                </div>

                <div class="col-12 p-4 videoCombate">
                    <div id="embedVideoCombate"></div>
                </div>


            </div>
             
            <div class="col-5 mt-5 mx-2 imgScreenStage2">
                <img src="assets/area1.png" class="imgScreen"> 
            </div> 
             
            <div class="col-1 ml-4 pt-5 imgScreenStage3">
                <img src="assets/juezCentral.png" class="juezCentral">
                <img src="assets/logo_piso.png" class="imgScreen2"> 
            </div> 
            <div class="col-5 mt-5 imgScreenStage2">
                <img src="assets/area2.png" class="imgScreen">
            </div>
             
            <div class="col-2 imgScreenStage4">
                <button id="btnBlue" name="btnBlue" class="btn btnJudge"><img src="assets/boton_ganador_azul.png" class="w-100"></button>

                <button id="btnPlayCont1" name="btnPlayCont1" class="btn lead btnPlay" onclick="uploadVideo()">
                    <i class="fas fa-upload"></i>Upload Video (Candles, Gumbup)
                </button>

                <button id="btnPlayCont2" name="btnPlayCont2" class="btn lead btnPlay"><i class="far fa-play-circle"></i>Play Videos(Candles, Gumbup)</button>

                <button id="btnStop" name="btnStop" class="btn lead btnPlay"><i class="far fa-stop-circle"></i>Stop Videos(Any)</button>
            </div>  
             
            <div class="col-6 imgScreenStage5">
                <div class="row">
                    <div class="col-4">
                        <img id="juez1" src="assets/juez.png" class="imgJuez"> 
                        <label id="nombreJuez1" class="etiquetaJuez">Juez 1</label>
                    </div>
                    
                    <div class="col-4">
                        <img id="juez2" src="assets/juez.png" class="imgJuez2">
                        <label id="nombreJuez2" class="etiquetaJuez">Juez 2</label>
                    </div>
                    
                    <div class="col-4">
                        <img id="juez3" src="assets/juez.png" class="imgJuez3">
                        <label id="nombreJuez3" class="etiquetaJuez">Juez 3</label>
                    </div>
                </div>
                
            </div> 
             
            <div class="col-2 imgScreenStage4">
                <button id="btnRed" name="btnRed" class="btn btnJudge"><img src="assets/boton_ganador_rojo.png" class="w-100"></button>

                <button id="btnUploadCombat" name="btnUploadCombat" class="btn lead btnPlay" onclick="uploadVideo()">
                    <i class="fas fa-arrow-alt-circle-up"></i> Upload Combat
                </button>
            </div>
   
        </div>
    </div>

    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="https://www.youtube.com/player_api?hl=es"></script>

    
    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script src="js/scriptMainLobby.js" type="text/javascript"></script>
    </body>
</html>