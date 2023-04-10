const brother = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0

}

const olderBrother = () => {
    return {
    ...brother,
    name: 'Irmão mais velho',
    life: 120,
    maxLife: 120,
    attack: 20,
    defense: 8
    }
}

const middleBrother = () => {
    return {
    ...brother,
    name: 'Irmão do meio',
    life: 90,
    maxLife: 90,
    attack: 17,
    defense: 14
    }
}

const youngerBrother = () => {
    return {
    ...brother,
    name: 'Irmão mais novo',
    life: 60,
    maxLife: 60,
    attack: 10,
    defense: 20
    }
}

const stage = {
    brother1: null,
    elBrother1: null,
    brother2: null,
    elBrother2: null,

    start(brother1, brother2, elBrother1, elBrother2) {
        this.brother1 = brother1;
        this.brother2 = brother2;
        this.elBrother1 = elBrother1;
        this.elBrother2 = elBrother2;

        this.elBrother1.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.brother1,this.brother2));
        this.elBrother2.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.brother2,this.brother1));

        this.update();
    },

    update(){
        // Player1
        this.elBrother1.querySelector('.name').innerHTML = `${this.brother1.name} - ${this.brother1.life.toFixed(2)} HP`;
        let p1PCT = (this.brother1.life / this.brother1.maxLife) * 100;
        this.elBrother1.querySelector('.bar').style.width = `${p1PCT}%`;
        // Player2
        this.elBrother2.querySelector('.name').innerHTML = `${this.brother2.name} - ${this.brother2.life.toFixed(2)} HP`;
        let p2PCT = (this.brother2.life / this.brother2.maxLife) * 100;
        this.elBrother2.querySelector('.bar').style.width = `${p2PCT}%`;
    },

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 | attacked.life <= 0){
            alert("A luta terminou! Clique em jogar novamente");
            return
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        actualAttack = attacking.attack * attackFactor;
        actualDefense = attacked.attack * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= attacking.attack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano no ${attacked.name}!`);
        } else {
            log.addMessage(`${attacked.name} defendeu a porrada do ${attacking.name}`)
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}

