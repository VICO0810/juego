let vida = 100;
let vidacpu = 100;

//para la funcion de turnos, este es el que empieza el juego
var jugadorActual = 0;

//declarar result de forma global como un valor que puede ir cambiando durante el codigo
var resultado;

const defensaAgua = 'Agua';
const defensaFuego = 'Fuego';
const defensaElectrico = 'Electricidad';

const ataqueMedusa = 'Medusa';
const ataquePulpo = 'Pulpo';
const ataqueTiburon = 'Tiburon';

ataques = ['Medusa', 'Pulpo', 'Tiburon'];
defensas = ['Agua','Fuego','Electricidad'];

window.onload = function () {
    ponerVidaJugadorCPU();
}
//asignacion de valor a restar a cada jugador
function golpe(ataque, defensa) {
    if (ataque == ataqueMedusa && defensa == defensaAgua) {
        resultado = 10
    }
    else if (ataque == ataqueMedusa && defensa == defensaFuego) {
        resultado = 20
    }
    else if (ataque == ataqueMedusa && defensa == defensaElectrico) {
        resultado = 0
    }
    else if (ataque == ataquePulpo && defensa == defensaAgua) {
        resultado = 0
    }
    else if (ataque == ataquePulpo && defensa == defensaFuego) {
        resultado = 10
    }
    else if (ataque == ataquePulpo && defensa == defensaElectrico) {
        resultado = 20
    }
    else if (ataque == ataqueTiburon && defensa == defensaAgua) {
        resultado = 20
    }
    else if (ataque == ataqueTiburon && defensa == defensaFuego) {
        resultado = 0
    }
    else if (ataque == ataqueTiburon && defensa == defensaElectrico) {
        resultado = 10
    }
    return resultado
}

//
function ataqueEnemigo() {
    ataque = ataques[Math.floor(Math.random() * 2)];

    defensa = document.getElementById('defensa_seleccionado').value;

    vida -= golpe(ataque, defensa);

    alert('El Enemigo te ha atacado con ' + ataque + ', te has defendido con ' + defensa + '\nTe ha quitado ' + golpe(ataque, defensa) + " de vida");
    ponerVidaJugadorCPU();
    cambiarTurno()
}
function ataqueJugador() {
    defensa = defensas[Math.floor(Math.random() * 2)];

    ataque = document.getElementById('ataque_seleccionado').value;

    vidacpu -= golpe(ataque, defensa);

    alert('Has atacado con ' + ataque + ', el enemigo se ha defendido con ' + defensa + '\nLe has quitado ' + golpe(ataque, defensa) + " de vida");
    ponerVidaJugadorCPU();
    cambiarTurno()
}

function cambiarTurno() {
    //MvidaJuga = mostrar botonesJugador
    const MBtnJuga = document.getElementById("ataque_seleccionado");
    const MBtnEne = document.getElementById("defensa_seleccionado");
    const btnAtaqueJugador = document.getElementById("btnAtaque");
    const btnDefensaJugador = document.getElementById("btnDefensa");
    if (jugadorActual === 0) {
        MBtnJuga.style.display = 'block';
        btnAtaqueJugador.style.display = 'block';

        MBtnEne.style.display = 'none';
        btnDefensaJugador.style.display = 'none';
        jugadorActual = 1;
    } else if (jugadorActual === 1) {
        MBtnJuga.style.display = 'none';
        btnAtaqueJugador.style.display = 'none';

        MBtnEne.style.display = 'block';
        btnDefensaJugador.style.display = 'block';

        jugadorActual = 0;
    }
}  



function ponerVidaJugadorCPU() {
    document.getElementById('vidacpu').innerHTML = vidacpu;
    document.getElementById('vidajugador').innerHTML = vida;
    cuerpo=document.getElementById('cuerpo');
    mensaje=document.getElementById('mensaje');
    if(vidacpu<=0){
        cuerpo.style.display = 'none';
        mensaje.innerHTML="Has ganado<br><a href='index.html'><button class='button'>Volver</button>";
        mensaje.style.display = 'block';

    }else if(vida<=0){
        cuerpo.style.display = 'none';
        mensaje.innerHTML="Has Perdido<br><a href='index.html'><button class='button' style='color: blue';>Volver</button>";
        mensaje.style.display = 'block';
    }
}