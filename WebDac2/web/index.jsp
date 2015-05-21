<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title> Siren Sound </title>

        <meta charset="utf-8">
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js"></script>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <link rel="stylesheet" href="css/style1.css" type="text/css">
        <script type="text/javascript" src="funcoes.js"></script>
    </head>

    <body onload="slide1()">
        <c:import url="header.jsp" />

        <div id="conteudo">
            
            <c:import url="menu.jsp" />
            
            <div id="banner">
                <span id="img"></span>
            </div>
        </div>

        <c:import url="footer.jsp" />
        
    </body>
</html>