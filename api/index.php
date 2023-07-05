<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

include('./database.php');

switch($_GET['endpoint']){
    //Endpoints para o painel administrativo
    case "login":
        login();
    break;
}