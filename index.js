let diaSemana = prompt("¿que dia es hoy?");
switch (diaSemana) {
    case "lunes":
        alert("lunes: pecho y biceps");
        break;
    case "martes":
        alert("martes: espalda y triceps");
        break;
    case "miercoles":
        alert("miercoles: descanso");
        break;
    case "jueves":
        alert("jueves: pierna y hombro");
        break;
    case "viernes":
        alert("viernes: full body");
        break;
    case "sabado":
        alert("sabado: descanso");
        break;
    case "domingo":
        alert("domingo: descanso");
        break;
    default:
        alert("escribe el dia de la semana en minúsculas")
}

for (i = 20; i <= 70; i++) {
    document.write("el numero es: " + i + "<br>");
}
var num = prompt("indique el limite del bucle")
for (i = 1; i <= num; i++)
    document.write("hola mundo" + i + "<br>")