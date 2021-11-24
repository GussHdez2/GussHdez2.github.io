<?php
    include 'loginQuery.php';
?>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- CSS only -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/estilosIndex.css">
    </head>

    <body class="mainContent">
    
    <div class="content-fluid">
         <div class="row">
            <div class="col-2 d-none d-md-block"></div>

            <div class="col-12 col-md-8">
                <div class="row">                    
                    <div class="col-12 py-5">
                        <img src="assets/logo_index.png" class="w-100">
                    </div>

                    <div class="col-12 p-5">
                        <form method="post" action="" name="loginForm">
                            <input id="UserName" class="formLogin" type="text" placeholder="Username" name="UserName" required>
                            <input id="UserPass" class="formLogin" type="password" placeholder="Password" name="UserPass" required>
                            <button id="loginBtn" class="btn formLogin btnForm" name="loginBtn" type="submit">Join as Judge</button>
                            <button id="guestBtn" class="btn formLogin btnForm" name="guestBtn" type="submit">Join as Guest</button>
                        </form>
                    </div>
                </div>
 
             </div>
        </div>
    </div>
    
    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
       
    </body>
</html>
