
let name = prompt('Cual es tu nombre?'); //CON ESTO, VOY A ALMACENAR EL NOMBRE DE LA PERSONA EN LA VARIABLE NAME
let age = prompt('Cual es tu edad?'); //LO MISMO, PERO ALMACENO EL VALOR DE SU EDAD
let text = ""; //VOY A CREAR ESTA VARIABLE Y DEJARLA VACIA PARA LUEGO REASIGNARLA EN UNA FUNCION
let ageNum = parseInt(age);

const currentDate = new Date(); //ESTA FUNCION SIRVE PARA OBTENER DE LA FECHA DE HOY
const year = currentDate.getFullYear() - Number(age); //ESTO SIRVE PARA DEFINIR QUE QUIERO SOLO EL ANO DE LA VARIABLE DE ARRIBA, NO LA FECHA ENTERA

function agelog() {
    if (ageNum<=110 && ageNum>=45) {
        text = "Tas viejo amigo.";
    } else if (ageNum<=44 && ageNum>=18) {
        text = "Sos de los mios jeje.";
    } else if (ageNum<=17) {
        text = "Que hace un bebe en mi pagina?";
    }
}  //ESTA FUNCION SIRVE PARA MODIFICAR LA VARIABLE VACIA text SEGUN LA EDAD QUE HAYA PUESTO LA PERSONA

agelog();

let message = "Bienvenido " + name + ". Hoy tenes " + age + " años." + " Naciste en el " + year + ". " + text; //CON ESTO JUNTAMOS TODOS LOS DATOS EN UNA SOLA STRING PARA MOSTRAR EN LA CONSOLA

console.log(message + ' / Todos los anos que vas a vivir hasta el 2100: '); //LLAMAMOS A LA STRING ANTERIORMENTE MENCIONADA PARA QUE ANDE EN LA CONSOLA

for(let i=year; i<=2100; i++) {
    console.log(i)
}


