let p1 = 0;
let p2 = 0;
const b = ["older", "middle", "young"];

let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
select1.querySelector('#older').addEventListener('click',() => getPlayers(select1.className,b[0]));
select1.querySelector('#middle').addEventListener('click',() => getPlayers(select1.className,b[1]));
select1.querySelector('#younger').addEventListener('click',() => getPlayers(select1.className,b[2]));
select2.querySelector('#older').addEventListener('click',() => getPlayers(select2.className,b[0]));
select2.querySelector('#middle').addEventListener('click',() => getPlayers(select2.className,b[1]));
select2.querySelector('#younger').addEventListener('click',() => getPlayers(select2.className,b[2]));


function getPlayers(Player,bro) {
    var card1 = document.querySelector("#brother1 .card1");
    var card2 = document.querySelector("#brother2 .card2");
    if (Player == "select1" && bro == "older") {
        document.querySelector('.card11').src = 'style/img/old.jpg';
        return card1.src = 'style/img/old.jpg',
        p1 = olderBrother();
    }
    else if (Player == "select1" && bro == "middle") {
        document.querySelector('.card11').src = 'style/img/middle.jpg';
        card1.src = 'style/img/middle.jpg';
        return p1 = middleBrother();
    }
    else if ( Player == "select1" && bro == "young") {
        document.querySelector('.card11').src = 'style/img/young.jpg';
        card1.src = 'style/img/young.jpg';
        return p1 = youngerBrother();
    }
    else if (Player == "select2" && bro == "older") {
        document.querySelector('.card22').src = 'style/img/old.jpg';
        card2.src = 'style/img/old.jpg';
        return p2 = olderBrother();
    }
    else if (Player == "select2" && bro == "middle") {
        document.querySelector('.card22').src = 'style/img/middle.jpg';
        card2.src = 'style/img/middle.jpg';
        return p2 = middleBrother();
    }
    else if ( Player == "select2" && bro == "young") {
        document.querySelector('.card22').src = 'style/img/young.jpg';
        card2.src = 'style/img/young.jpg';
        return p2 = youngerBrother();
    }
}

function start() {

    if(p1 == 0 || p2 == 0) {
        alert("Escolha os dois lutadores para começar!")
    } else {
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

}

function reload() {
    window.location.reload();
}