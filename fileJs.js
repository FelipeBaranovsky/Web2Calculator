
var maxChar=30;
var operation="";
var n1 = "";
var n2 = "";
var dotopflag = false;
var opflag = false;
var initialflag = false;
var dotflag = false;
var resultado = 0;
var negflag = false;

function clearText(){
    document.getElementById("screen").value = "";
    maxChar=30;
    opflag = false;
    n1 = "";
    n2 = "";
    initialflag = false;
    dotflag = false;
    dotopflag = false;
    negflag = false;
}

function restartText(){
    clearText();
    if(resultado.toString().includes(".")){
        resultado = resultado.toFixed(1);
        dotflag = true;
    }
    
    document.getElementById("screen").value = resultado;
    n1 += resultado;
    initialflag = true;
    for(cont = 0; cont < resultado.toString().length; cont ++){
        maxChar--;
    }
    
}

function addText(caracter){
    document.getElementById("screen").value += caracter;
    maxChar--;
}

function deleteChar(){
    cadena = document.getElementById("screen").value;

    if(cadena == ""){
        alert("No hay nada que borrar.");
    }
    if(cadena.toString().length == 1){
        clearText()
    }else{
        var aux = cadena.toString().substring(cadena.length-1);
        var aux2 = cadena.toString().substring(cadena.length-3,cadena.length-2);
        if(aux == "+" || aux == "-" || aux == "*" || aux == "/"){
            opflag = false;
            initialflag = true;
        }else{
            if(aux == "."){
                if(aux2 != "+" || aux2 != "-" || aux2 != "*" || aux2 != "/"){
                  dotflag = false;  
                  if(opflag ==false){
                    n1 = n1.toString().substring(0, n1.length-1);
                  }else{
                    n2 = n2.toString().substring(0, n2.length-1);
                  }
                }  
            }else{
                if(opflag == false){
                    n1 = n1.toString().substring(0, n1.length-1);
                }else{
                    n2 = n2.toString().substring(0, n2.length-1);
                }
            }
            
        }
    }

    
    cadena = cadena.toString().substring(0, cadena.length-1);
    document.getElementById("screen").value = cadena;
    maxChar++;
}


function updateText(caracter){
    
    // if(maxChar == 0 || (opflag == true && (caracter=="+" || caracter=="-" || caracter=="*" || caracter=="/")) || (initialflag == false && (caracter=="+" || caracter=="-" || caracter=="*" || caracter=="/" || caracter==".")) || dotflag == true && (caracter == ".") || maxChar == 1 && (caracter == ".")){

    if(maxChar == 0 || (maxChar == 1 && (caracter == "."))){  
        alert("Máxima cantidad de caracteres alcanzada.");
    }else{
        if(opflag == true && (caracter=="+" || caracter=="-" || caracter=="*" || caracter=="/")){
            alert("Ya se ha seleccionado una operación.");
        }else{
            if(initialflag == false && (caracter=="+" || caracter=="*" || caracter=="/" || caracter==".")){
                alert("Se espera un número.");
            }else{
                if(initialflag == false && caracter == "-"){

                    if(negflag == false){
                        negflag = true;
                        addText(caracter);
                        n1 += caracter;
                    }else{
                        alert("Se espera un número.")
                    }  
                }else{
               if(dotflag == true && (caracter == ".")){
                    alert("No se puede ingresar dos puntos seguidos.");
               }else{
                   if(dotopflag == true && (caracter=="+" || caracter=="-" || caracter=="*" || caracter=="/")){
                        alert("Ingrese los decimales.");
                   }else{
                        var aux = document.getElementById("screen").value;
                        aux = aux.toString().substring(aux.length-1);

                        if(caracter == "." && (aux=="+" || aux=="-" || aux=="*" || aux=="/")){
                            alert("No se pude poner un punto luego de un simbolo.");
                        }else{
                            if(caracter == "." && n1.toString().includes(".") && opflag==false){
                                alert("No puede ingresar dos puntos seguidos.");
                            }else{
                                
                            switch(caracter){
                                case "+":
                                    operation = "+";
                                    opflag = true;
                                    dotflag = false;
                                    initialflag = false;
                                    break;  
                                case "-":
                                    operation = "-";
                                    opflag = true;
                                    dotflag = false;
                                    initialflag = false;
                                    break;  
                                case "*":
                                    operation = "*";
                                    opflag = true; 
                                    dotflag = false;
                                    initialflag = false;
                                    break;  
                                case "/":
                                    operation = "/";
                                    opflag = true; 
                                    dotflag = false;
                                    initialflag = false;
                                    break;  
                                case ".":
                                    dotflag = true;
                                    dotopflag = true;
                                    if(opflag == false){
                                        n1 += ".";
                                    }else{
                                        n2 += ".";
                                    }
                                    break;
                                case "=":
                                    
                                    if(n1 != "" && n2 != ""){
                                        if(n2.toString().substring(n2.length-1) == "."){
                                            alert("Ingrese los decimales.");
                                            break;
                                        }
                                        switch(operation){
                                            case "+":
                                                resultado = parseFloat(n1)+parseFloat(n2);
                                                restartText();
                                                break;  
                                            case "-":
                                                resultado = parseFloat(n1)-parseFloat(n2);
                                                restartText();
                                                break;  
                                            case "*":
                                                resultado = parseFloat(n1)*parseFloat(n2);
                                                restartText();
                                                break;  
                                            case "/":
                                                resultado = parseFloat(n1)/parseFloat(n2);
                                                restartText();
                                                break; 
                                            default:
                                                alert("No ingresó ninguna operación.")
                                                break;
                                        }
                                    }else{
                                        alert("No hay dos terminos");
                                    }
                                    
                                    break;
                                default:
                                    initialflag = true;
                                    if(dotopflag == true){
                                        dotopflag = false;
                                    }
                                    if(opflag == false){  
                                        n1 += caracter;
                                    }else{
                                        n2 += caracter;
                                    } 
                                    break;
                            }
                            if(caracter != "=")
                                addText(caracter);
                            }

                        }

                }
               }
            
            }
            }
            
            
        }
    }

}

