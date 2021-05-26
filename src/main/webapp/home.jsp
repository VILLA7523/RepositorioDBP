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
                <h1>Usuario</h1>
            </div>
                <div class="form__caja" id="caja_names">
                    <div class="form__caja-input">
                        Nombre: <c:out value="${user.name}" default="nombres"/>
                    </div>
                </div>
                
                <div class="form__caja" id="caja_surname">
                    <div class="form__caja-input">
                        Apellidos: <c:out value="${user.surname}" default="apellidos"/>
                    </div>
                </div>
               
                 <div class="form__caja" id="caja_age">
                    <div class="form__caja-input">
                        Edad: <c:out value="${user.age}" default="edad"/>
                    </div>
                </div>
              </div>    
              
        </body>
</html>