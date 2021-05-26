<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
 <head>
            <title>Login</title>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="css/Login.css">
    
        </head>
        <body>
            <div id=contentform>
            <div>
                <h1>Formulario</h1>
            </div>
            <form action="LoginServlet" method="get" class="formulario" id="formulario" >

                <div class="form__caja" id="caja_names">
                    <label for="names">Nombre:</label><br>
                    <div class="form__caja-input">
                        <input type="text" class="form__input" name="names" id="names"  maxlength="50" min="3">
                        <i class="form__icon fas fa-times-circle"></i>
                    </div>
                    <p class="form__input-error">El nombre debe ser de caracter alfabetico minimo 3 caracteres maximo 50</p><br>
                </div>
                
                <div class="form__caja" id="caja_surname">
                    <label for="surname">Apellido:</label><br>
                    <div class="form__caja-input">
                        <input type="text" class="form__input" id="surname" name="surname" maxlength="50" min="3">
                        <i class="form__icon fas fa-times-circle"></i>
                    </div>
                    <p class="form__input-error">El apellido debe ser de caracter alfabetico, minimo 3 caracteres maximo 50</p><br>
                </div>
                
      
                 <div class="form__caja" id="caja_age">
                    <label for="age">Edad:</label><br>
                    <div class="form__caja-input">
                        <input type="text" class="form__input" name="age" id="age"  maxlength="2" min="1">
                        <i class="form__icon fas fa-times-circle"></i>
                    </div>
                    <p class="form__input-error">Esa edad no existe</p><br>
                </div>
                
                 <div class="form__msj" id="form__msj">
                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b>Vuelva a llenar el formulario....</p>
                </div>
    
                <div class="form__caja form__caja-btn-enviar">
                    <button type="submit">Enviar</button>
                    <p class="form__msj-exito" id="form__msj-exito">Formulario enviado!</p>
                </div>
                
              </form>
              </div>    
              <script  src = "AuthLogin.js " > </script>         
              <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
        </body>
</html>