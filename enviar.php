<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefone = strip_tags(trim($_POST["telefone"]));
    $mensagem = strip_tags(trim($_POST["mensagem"]));

    $para = "cartoriomirandiba1@gmail.com.br";
    $assunto = "Nova mensagem do site - Contato";
    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    // Use um e-mail do seu domínio no campo From, se possível
    $cabecalhos = "From: murilofagner2023@gmail.com\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";
    $cabecalhos .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        echo "<script>alert('Mensagem enviada com sucesso!');window.location.href='contato.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar mensagem. Tente novamente.');window.location.href='contato.html';</script>";
    }
} else {
    header("Location: contato.html");
    exit;
}
?>