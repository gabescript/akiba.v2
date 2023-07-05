<?php 
$host = "localhost";
$username = "root";
$password = "";
$dbname = "akiba";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro ao conectar no banco de dados akiba: " . $e->getMessage();
}