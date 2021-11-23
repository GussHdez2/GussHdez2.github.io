$(document).ready(function() {	
    function update(){
        
        var sum = $('#tipoSemaforo').text();
        
        $.ajax({
            type: "POST",
            url: "semaforoLobbyChallenger.php",
            data: "dataString",
            success: function() {
                
                
                if (sum == "0"){
                    console.log ("Rojo");
                    $('#imgSemaforo').attr("src", "assets/pagina_sala/semaforo_rojo.png");
                } else if (sum == "1"){
                    console.log ("Amarillo");
                    $('#imgSemaforo').attr("src", "assets/pagina_sala/semaforo_amarillo.png");
                } else if (sum == "2") {
                    console.log ("Verde");
                    $('#imgSemaforo').attr("src", "assets/pagina_sala/semaforo_verde.png");
                }
            }, complete: function() {
                
                $.ajax({
                    type: "GET",
                    url: "globalSemaforo.php",
                    dataType : 'json',
                    success: function(result) {
                        $('#tipoSemaforo').text(result['semaforo']);
                    }
                  });
                
        }
        });
    }
 
    setInterval(update, 5000);
    
    $.ajax({
            type: "GET",
            url: "datosCompetidor.php",
            dataType : 'json',
            success: function(result) {
                
                $('.nombreAlumno').text(result['nombreCompetidor']);
                $('.nombreGrafica').text('Grafica: '+result['graficaCompetidor']);
                $('.nombreContienda').text('Contienda: '+result['contiendaCompetidor']);
                
            }, complete: function() {
                
        }
        });
});