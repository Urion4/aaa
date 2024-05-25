 function calcularCargo1() {
     var banco = document.getElementById('banco').value;
     var terreno = document.getElementById('terreno').value;
     var edificio = document.getElementById('edificio').value;

     var total = parseFloat(banco) + parseFloat(terreno) + parseFloat(edificio);

     document.getElementById('suma1').innerText = total;
 }

 document.getElementById('banco').addEventListener('input', calcularCargo1);
 document.getElementById('terreno').addEventListener('input', calcularCargo1);
 document.getElementById('edificio').addEventListener('input', calcularCargo1); 

 function calcularCargo2() {
     var almacen = document.getElementById('almacen').value;
     var publicidad = document.getElementById('publicidad').value;
     var clientes = document.getElementById('clientes').value;
     var costodeventa = document.getElementById('costo de venta').value;
     var gastodeventa = document.getElementById('gasto de venta').value;
     var gastodeadmin = document.getElementById('gasto de admin').value;

     var total = parseFloat(almacen) + parseFloat(publicidad) + parseFloat(clientes) + parseFloat(costodeventa) + parseFloat(gastodeventa) + parseFloat(gastodeadmin);

     document.getElementById('suma2').innerText = total;
 }

 document.getElementById('almacen').addEventListener('input', calcularCargo2);
 document.getElementById('publicidad').addEventListener('input', calcularCargo2);
 document.getElementById('clientes').addEventListener('input', calcularCargo2);
 document.getElementById('costo de venta').addEventListener('input', calcularCargo2);
 document.getElementById('gasto de venta').addEventListener('input', calcularCargo2);
 document.getElementById('gasto de admin').addEventListener('input', calcularCargo2);

 document.addEventListener("DOMContentLoaded", function () {
     const capitalInput = document.getElementById("Capital");
     const mostrarCapital = document.getElementById("mostrarCapital");

     capitalInput.addEventListener("input", function () {
         const value = parseFloat(capitalInput.value);
         mostrarCapital.innerText = value;
     });
 });

 function calcularCargo3() {
     var abonodealmacen = document.getElementById('abono de almacen').value;
     var proveedores = document.getElementById('proveedores').value;
     var acredores = document.getElementById('acredores').value;
     var abonodeventa = document.getElementById('abono de venta').value;
     var abonodebanco = document.getElementById('abono de banco').value;

     var total = parseFloat(abonodealmacen) + parseFloat(proveedores) + parseFloat(acredores) + parseFloat(abonodeventa) + parseFloat(abonodebanco);

     document.getElementById('suma3').innerText = total;
 }

 document.getElementById('abono de almacen').addEventListener('input', calcularCargo3);
 document.getElementById('proveedores').addEventListener('input', calcularCargo3);
 document.getElementById('acredores').addEventListener('input', calcularCargo3);
 document.getElementById('abono de venta').addEventListener('input', calcularCargo3);
 document.getElementById('abono de banco').addEventListener('input', calcularCargo3);
 

 function actualizarCeldas() {
    var valor = document.getElementById('abono de venta').value;
     var costoDeVenta = document.getElementById("costo de venta").value;
    var gastoDeVenta = document.getElementById("gasto de venta").value;
    var gastoDeAdmin = document.getElementById("gasto de admin").value;
     var resultado = document.getElementById("celda3");
    resultado.textContent = "Costo de venta: " + costoDeVenta + ", Gasto de venta: " + gastoDeVenta + ", Gasto de admin: " + gastoDeAdmin

    document.getElementById('celda1').innerText = valor;
    document.getElementById('celda2').innerText = valor;
     

    // Llamar a la función para restar las celdas 1 y 2
    restarCeldas();
}

function restarCeldas() {
    // Obtener los valores de las celdas 1 y 2
    let celda1 = document.getElementById("resultado1").textContent;
    let celda2 = document.getElementById("celda2").textContent;
    let celda3 = document.getElementById("resta1").textContent;
    let celda4 = document.getElementById("celda1").textContent;
    let celda5 = document.getElementById("resultado1").textContent;
    let celda6 = document.getElementById("celda2").textContent;
    let celda7 = document.getElementById("celdar").textContent;
    let celda8 = document.getElementById("celdarr").textContent;
    let celda9 = document.getElementById("lulu").textContent;
    let celda10 = document.getElementById("celda7").textContent;
    let celda11 = document.getElementById("celda8").textContent;
    let celda12 = document.getElementById("celda9").textContent;
    let valorBanco = parseFloat(document.getElementById("banco").value);
    let valorBonoBanco = parseFloat(document.getElementById("abono de banco").value);
    
    
    // Convertir los valores a números
    let valorCelda1 = parseFloat(celda1);
    let valorCelda2 = parseFloat(celda2); 
    let valorCelda3 = parseFloat(resta1);
    let valorCelda4 = parseFloat(celda4);
    let valorCelda5 = parseFloat(celda5);
    let valorCelda6 = parseFloat(celda6);
    let valorCelda7 = parseFloat(celda7);
    let valorCelda8 = parseFloat(celda8);
    let valorCelda9 = parseFloat(celda9);
    let valorCelda10 = parseFloat(celda10);
    let valorCelda11 = parseFloat(celda11);
    let valorCelda12 = parseFloat(celda12);


    // Restar los valores
    let resultadoResta = valorCelda2 - valorCelda1;
    let resultadoResta1 = valorCelda2 - valorCelda1 - valorCelda3 || 0;
    let resultadoSuma = valorCelda4 + valorCelda5;
    let resultadoSuma1 = valorCelda6 + valorCelda1;
    let resultadoSumaTotal = valorCelda12 + valorCelda11 + valorCelda10 + valorCelda9 +valorCelda8 + valorCelda7;    
    // Mostrar el resultado en la celda correspondiente
    document.getElementById("resta1").textContent = resultadoResta;
    document.getElementById("resta2").textContent = resultadoResta;
    document.getElementById("restaa").textContent = resultadoResta;
    document.getElementById("ulio").textContent = resultadoResta;
    document.getElementById("resta3").textContent = resultadoResta;
    document.getElementById("celda5").textContent = resultadoResta1;
    document.getElementById("celda6").textContent = resultadoResta1;
    document.getElementById("suma4").textContent = resultadoSuma;
    document.getElementById("suma5").textContent = resultadoSuma1;
    document.getElementById("suma6").textContent = resultadoSumaTotal;
}



 function calcularCargo4() {
     var costodeventa = document.getElementById('costo de venta').value;
     var gastodeventa = document.getElementById('gasto de venta').value;
     var gastodeadmin = document.getElementById('gasto de admin').value;

     var total = parseFloat(costodeventa) + parseFloat(gastodeventa) + parseFloat(gastodeadmin);

     document.getElementById('resultado1').innerText = total;
 }

 document.getElementById('costo de venta').addEventListener('input', calcularCargo4);
 document.getElementById('gasto de venta').addEventListener('input', calcularCargo4);
 document.getElementById('gasto de admin').addEventListener('input', calcularCargo4);

function restarCeldas1() {
    
    // Obtener los valores del banco y del bono de banco
    let valorBanco = parseFloat(document.getElementById("banco").value);
    let valorBonoBanco = parseFloat(document.getElementById("abono de banco").value);
    
    // Restar el valor del bono de banco al valor del banco
    let resultadoResta = valorBanco - valorBonoBanco;
    
    // Mostrar el resultado en la celda correspondiente
    document.getElementById("celda7").textContent = resultadoResta;
}

 function actualizarOtraCelda() {
        // Obtener el valor del campo de entrada
        var terrenoValue = document.getElementById('terreno').value;
        var edificioValue = document.getElementById('edificio').value;
       
     
        // Mostrar el valor en la celda de destino
        document.getElementById('celda9').textContent = terrenoValue;
        document.getElementById('celda8').textContent = edificioValue;
        
     
}

function actualizar2() {
        // Obtener el valor del campo de entrada
        var capitalValue = document.getElementById('Capital').value;

        // Mostrar el valor en la celda de destino
        document.getElementById('celdaa').textContent = capitalValue;
    }
function restara(){
     // Obtener los valores del banco y del bono de banco
    let valorAlmacen = parseFloat(document.getElementById("almacen").value);
    let valorBonoAlmacen = parseFloat(document.getElementById("abono de almacen").value);
    
    // Restar el valor del bono de banco al valor del banco
    let resultadoResta = valorAlmacen - valorBonoAlmacen;
    
    // Mostrar el resultado en la celda correspondiente
    document.getElementById("celdar").textContent = resultadoResta;
}
 
function actualizar3() {
        // Obtener el valor del campo de entrada "publicidad"
        var publicidadValue = document.getElementById('publicidad').value;

        // Mostrar el valor en la celda de destino
        document.getElementById('celdarr').textContent = publicidadValue;
    }

function actualizar4() {
        // Obtener el valor del campo de entrada "Acreedores"
        var acredoresValue = document.getElementById('acredores').value;

        // Mostrar el valor en la celda de destino
        document.getElementById('celdi').textContent = acredoresValue;
    }
function actualizar5() {
        // Obtener el valor del campo de entrada "proveedores"
        var proveedoresValue = document.getElementById('proveedores').value;

        // Mostrar el valor en la celda de destino
        document.getElementById('celdio').textContent = proveedoresValue;
    }
function actualizar6() {
        // Obtener el valor del campo de entrada "proveedores"
        var clientesValue = document.getElementById('clientes').value;

        // Mostrar el valor en la celda de destino
        document.getElementById('lulu').textContent = clientesValue;
    }
