var estudiantes = [];

function log() {
  var logEl = document.createElement("tr");
  for (var i = 0; i < arguments.length; i++) {
    /* Creamos un nodo de texto HTML con escapado de etiquetas (seguro) */
    var texto = document.createTextNode(arguments[i]);
    var td = document.createElement('td');
    td.appendChild(texto);
    logEl.appendChild(td);
  }
  logEl.className = "logCSS";
  document.getElementById('otraprueba').appendChild(logEl);
}

function registro() {

  var codigoE = document.getElementById('codigo').value;
  var nombreE = document.getElementById('nombre').value;
  var notaE = parseFloat(document.getElementById('nota').value);

if (codigoE != "" && nombreE != "" && notaE != "") {

  document.getElementById('codigo1').value = codigoE;
  document.getElementById('nombre1').value = nombreE;
  document.getElementById('nota1').value = notaE;

  log(codigoE, nombreE, notaE);

  estudiantes.push(
    {
      'codigo':codigoE,
      'nombre':nombreE,
      'nota':notaE
    }
  );
  console.log(estudiantes);
} else {
    alert("Por favor ingrese todos los datos del estudiante");
}
}



function Calcular_Prom(json) {

    if (json.length > 1) {

        var CalProm = 0;

        for (var i = 0; i < json.length; i++) {

            CalProm += parseFloat(json[i].nota);
        }
        var NotProm = CalProm / json.length;

        alert("La nota promedio de la clase es: " + NotProm);
    } else {
        alert("Registre un minimo de dos estudiantes");
    }
}


function promedio(){
    Calcular_Prom(estudiantes);
}



function nota_mayor(json) {
    if (json.length > 1) {
        var text = "";
        var max = 0;
        var pous = 0;
        for (var i = 0; i < json.length; i++) {
            pous = parseFloat(json[i].nota);
            if (max < pous) {
                max = pous;
            text = json[i].nombre + " con codigo " + json[i].codigo + " y su nota es " + json[i].nota;
        }
    }
    alert("El estudiante con la mejor nota es: " + text);
} else {
        alert("Registre un minimo de dos estudiantes");
}
}

function NotaAlta() {
    nota_mayor(estudiantes);
}


function nota_menor(json) {
    if (json.length > 1) {
        var text = "";
        var min = 1000;
        var pous = 0;
        for (var i = 0; i < json.length; i++) {
            pous = parseFloat(json[i].nota);
            if (min > pous) {
                min = pous;
                text = json[i].nombre + " con codigo " + json[i].codigo + " y su nota es " + json[i].nota;
            }
        }
        alert("El estudiante con la nota mas baja es: " + text);
    } else {
        alert("Registre un minimo de dos estudiantes");
    }
}


function NotaMenor() {
    nota_menor(estudiantes);
}



document.getElementById("registro").addEventListener("click", function(){
  registro();
})

document.getElementById("Calcular_Prom").addEventListener("click", function(){
  promedio();
})

document.getElementById("nota_mayor").addEventListener("click", function(){
  NotaAlta();
})

document.getElementById("nota_menor").addEventListener("click", function(){
  NotaMenor();
})
