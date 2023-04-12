const p1 = 0;
const p2 = 0;

let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
select1.querySelector('#older').addEventListener('click', () => getPlayers("older"));
select2.querySelector('#older').addEventListener('click', getPlayers("older"));


function getPlayers(Player) {
    return console.log(Player);
    /*let card1 = document.querySelector('.card1 img');
    let card2 = document.querySelector('.card2 img');
    if (Player == "older") {
        return p1 = olderBrother();
    }*/
    
    
}

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