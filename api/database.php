<?php
include('./connection.php');

//Decodifica dados vindo da aplicação React
function react($data){
    $ajax = file_get_contents("php://input");
    $ajax_data = json_decode($ajax, true);
    return $ajax_data[$data];
}

//Função que é usada somente para fazer o login
function login(){
    try{
        $login = $GLOBALS['conn']->prepare('SELECT * FROM usuarios WHERE usuario=? and senha=?');
        $login->bindValue(1, react('usuario'));
        $login->bindValue(2, react('senha'));
        $login->execute();
        $login_logado = $login->fetchAll();

        if($login->rowCount() == 1){
            $logado = array(
                'status'=>'true',
                'usuario'=> $login_logado[0]['usuario']
            );
            echo json_encode($logado);
        }else{
            $error = array(
                'status'=>'não autorizado'
            );
            echo json_encode($error);
        }
    }catch(PDOException $e){
        echo "Erro na query de login: ".$e->getMessage();
    }
}