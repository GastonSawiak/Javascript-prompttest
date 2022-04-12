
let name = prompt('Cual es tu nombre?');
let age = prompt('Cual es tu edad?');
let text = "";
let ageNum = parseInt(age);

const currentDate = new Date();
const year = currentDate.getFullYear() - Number(age);

function agelog(ageNum) {
    if (age<=110 && age>=45) {
        text = "Tas viejo amigo.";
    } else if (age<=44 && age>=18) {
        text = "Sos de los mios jeje.";
    } else if (age<=17) {
        text = "Que hace un bebe en mi pagina?";
    }
}

agelog(); 

let message = "Bienvenido " + name + ". Hoy tenes " + age + " años." + " Naciste en el " + year + ". " + text;

console.log(message);




