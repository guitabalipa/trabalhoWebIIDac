<%-- 
    Document   : header
    Created on : 15/05/2015, 21:56:45
    Author     : Guilherme
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <body>
        <div id="header">
            <div id="logo"></div>
        </div>
        <div id="loginBox">
            <h7>Seja Bem Vindo! <a href="#dialog" name="modal">Fazer Login?</a>
             ou <a href="">Cadastrar-se?</a></h7>
        </div>
        <div id="boxes">
            <div id="dialog" class="window">
                    <div id="barraTitulo">
                        <a href="#" class="close">Fechar [X]</a><br />
                    </div>
                    <div id="contenido">
                        <form>
                            <p>Login</p>
                            <h8><input type="text" class="login" name="login" value="" placeholder="Email"></h8>
                            <h8><input type="password" class="senha" name="senha" value="" placeholder="Senha"></h8>
                            <h8><button type="submit" class="button" style="margin-top: 10px; margin-left: 50px;">Entrar</button></h8>
                        </form>
                    </div>
            </div>
            <!-- Máscara para cobrir a tela -->
            <div id="mask"></div>
        </div>
        <div id="searchbox">
            <input class="search" type="text" placeholder="Digite aqui..." required>
            <input class="button" type="button" value="Buscar">
        </div>
        <div id="carrinho">
            
        </div>
    </body>
</html>