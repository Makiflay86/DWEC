//Fecha de caducidad de las cookies
caduca = "31 Dec 2026 23:59:59 GMT";

//lista de elementos afectados
misCookies=["colorFondo","colorH","fuenteH","alinearH","tamanoH","colorP","fuenteP","alinearP","tamanoP"];

//al cargar la página recupera la última configuración
window.onload =  function() 
{
    for (n=0;n<misCookies.length;n++) 
    {
        leer(misCookies[n]);
        miNombre=misCookies[n];
        escribir();
    }
}

//guardar cookies       
function guardar(Nombre,Valor,Fecha)
{
    document.cookie= Nombre + "=" + Valor;
}

//leer cookies
function leer(nombre) 
{
    lista = document.cookie.split(";")
    for (i in lista) 
    {
        busca = lista[i].search(nombre)
        if (busca > -1) {micookie=lista[i]}
    }

    igual = micookie.indexOf("=")
    valor = micookie.substring(igual+1)
    return valor
}

//Guardar, leer y configurar estilo para una nueva cookie
function ver() 
{
    guardar(miNombre,miValor,caduca)
    leer(miNombre)
    escribir()
}

//configurar estilo de la cookie                 
function escribir() 
{                    
    switch (miNombre) 
    {
        case "colorFondo": //cambiar color de fondo
            document.body.style.backgroundColor = valor;
            break;
        case "colorH": //cambiar color cabecera
            cabeceras = document.getElementsByTagName("h1");
            for (i=0;i<cabeceras.length;i++) {
                cabeceras[i].style.color = valor
                }
            break;
        case "fuenteH": //cambiar fuente cabecera
            cabeceras = document.getElementsByTagName("h1");
            for (i=0;i<cabeceras.length;i++) {
                cabeceras[i].style.fontFamily = valor
                }
            break;
        case "alinearH": //cambiar alineación cabecera
            cabeceras = document.getElementsByTagName("h1");
            for (i=0;i<cabeceras.length;i++) {
                cabeceras[i].style.textAlign = valor
                }
            break;
        case "tamanoH": //cambiar tamaño cabecera
            cabeceras = document.getElementsByTagName("h1");
            for (i=0;i<cabeceras.length;i++) {
                cabeceras[i].style.fontSize = valor
                }
            break;
        case "colorP": //cambiar color parrafos
            parrafos = document.getElementsByTagName("p");
            for (i=0;i<parrafos.length;i++) {
                parrafos[i].style.color = valor
                }
            break;
        case "fuenteP": //cambiar fuente parrafos
            parrafos = document.getElementsByTagName("p");
            for (i=0;i<parrafos.length;i++) {
                parrafos[i].style.fontFamily = valor
                }
            break;
        case "alinearP": //cambiar alineación parrafos
            parrafos = document.getElementsByTagName("p");
            for (i=0;i<parrafos.length;i++) {
                parrafos[i].style.textAlign = valor
                }
            break;
        case "tamanoP": //Cambiar tamaño párrafos
            parrafos = document.getElementsByTagName("p");
            for (i=0;i<parrafos.length;i++) {
                parrafos[i].style.fontSize = valor
            }
            break;
    }
}     

//Cambiar el estilo al indicado en el formulario                 
function aceptar() 
{
    for (i in misCookies) 
    {
        lista = "document.datos."+misCookies[i]
        lista = eval(lista)
        miNombre = lista.name
        opciones = lista.options
        valorSelec = lista.selectedIndex
        miValor = opciones[valorSelec].value
        ver()       
    } 
}

//Volver al estilo predeterminado.                      
function predeterminar() 
{ 
    valores = [1,3,2,0,0,3,2,0,1]
    for (i in misCookies) {
        lista = "document.datos."+misCookies[i]
        lista = eval(lista)
        miNombre = lista.name
        opciones = lista.options
        miValor = opciones[valores[i]].value
        ver()
        }
}   
