<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $nome = $_POST['nome'];
        $idade = $_POST['idade'];

     if (empty ($nome) || empty ($idade)){
            echo "Por favor, preemcha todos os codigos";
    }else{
            echo "CADASTRO REALIZADO COM SUCESSO! <br><br>";
            echo "Nome :". htmlspecialchars($nome). "<br>";
            echo "Idade :". htmlspecialchars($idade). "<br>";
     }
    }else{
        echo "Tente denovo!!";
    }

?>