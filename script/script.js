const p1 = 0;
const p2 = 0;

/*let older = document.querySelector('.select').addEventListener('click', () => getPlayers());
let middle = document.querySelector('#middle').addEventListener('click', () => getPlayers("middle"));


function getPlayers(Player1,Player2) {
    console.log(`${Player1} ${Player2}`);
}*/

function start() {
    document.querySelector('.reload').style.display = 'inline';
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.menu').style.display = 'none';

    stage.start(
        p1,
        p2,
        document.querySelector("#brother1"),
        document.querySelector("#brother2")
    );
}

function reload() {
    window.location.reload();
}