<?PHP 
   if($_SERVER["REQUEST_METHOD"] == "POST"){
   $matricula = $_POST['matricula'];
   $nome_aluno = $_POST['nome_aluno'];
   $nas_aluno=$_POST['nasc_aluno'];
   $sexo = $_POST ['sexo'];

   if (empty ($matricula) || empty ($nome_aluno) || empty( $nas_aluno) || empty($sexo) ){
      echo "Por favor, preencha todos os campos.";
   }else{
      echo "Cadastro realizado com sucesso! <br>";
      echo "Matricula: ".htmlspecialchars($matricula) . "<br>";
      echo "Nome: ". htmlspecialchars($nome_aluno). "<br>";
      echo "Data de nascimento: ". htmlspecialchars($nas_aluno). "<br>";
      echo "Sexo". htmlspecialchars($sexo). "<br>";
   }
}else{
      echo "Metodo de requisição invalido.";
}
   
   


 
?>