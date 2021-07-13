const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResult(param) {
    const daddy = document.getElementById("katas");
    const parag = document.createElement("p");
    const result = document.createTextNode(param);

    parag.appendChild(result)
    daddy.appendChild(parag)

}
function kata1() {
    // implemente o código do kata 1 aqui
    let resultado = [];
    for (let i = 1; i <= 25; i++) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}

function kata2() {
    // implemente o código do kata 2 aqui
    let resultado = [];
    for (let i = 25; i >= 1; i--) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}

function kata3() {
    // implemente o código do kata 3 aqui
    let resultado = [];
    for (let i = -1; i >= -25; i--) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}

function kata4() {
    // implemente o código do kata 4 aqui
    let resultado = [];
    for (let i = -25; i <= -1; i++) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}

function kata5() {
    // implemente o código do kata 5 aqui
    let resultado = [];
    for (let i = 25; i >= -25; i--) {
        if (i % 2 === 0) {
        } else {
            resultado.push(i)
        }
    }
    showResult(resultado);
    return resultado;
}

function kata6() {
    // implemente o código do kata 6 aqui
    let resultado = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            resultado.push(i)
        }
    }
    showResult(resultado);
    return resultado;
}

function kata7() {
    // implemente o código do kata 7 aqui
    let resultado = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            resultado.push(i)
        }
    }
    showResult(resultado);
    return resultado;
}

function kata8() {
    // implemente o código do kata 8 aqui
    let resultado = [];
    for (let i = 100; i > 0; i--) {
        if (i % 3 === 0 || i % 7 === 0) {
            resultado.push(i)
        }
    }
    showResult(resultado);
    return resultado;
}

function kata9() {
    // implemente o código do kata 9 aqui
    let resultado = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && !(i % 2 === 0)) {
            resultado.push(i)
        }
    }
    showResult(resultado);
    return resultado;
}

function kata10() {
    // implemente o código do kata 10 aqui
    showResult(sampleArray);
    return sampleArray;
}

function kata11() {
    // implemente o código do kata 11 aqui
    let resultado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    showResult(resultado);
    return resultado;
}

function kata12() {
    // implemente o código do kata 12 aqui
    let resultado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (!(sampleArray[i] % 2 === 0)) {
            resultado.push(sampleArray[i])
        }
    }
    showResult(resultado);
    return resultado;
}

function kata13() {
    // implemente o código do kata 13 aqui
    let resultado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    showResult(resultado);
    return resultado;
}

function kata14() {
    // implemente o código do kata 14 aqui
    let resultado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        resultado.push(sampleArray[i] * sampleArray[i])
    }
    showResult(resultado);
    return resultado;
}

function kata15() {
    // implemente o código do kata 15 aqui
    let resultado = 0;
    for (let i = 1; i <= 20; i++) {
        resultado = resultado + i;
    }
    showResult(resultado);
    return resultado;
}

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0;
    for (let i = 0; i <= sampleArray.length - 1; i++) {
        resultado = resultado + sampleArray[i];
    }
    showResult(resultado);
    return resultado;
}

function kata17() {
    // implemente o código do kata 17 aqui
    let resultado = sampleArray[0];
    for (let i = 1; i < sampleArray.length; i++) {
        if (resultado > sampleArray[i]) {
            resultado = sampleArray[i]
        }
    }
    showResult(resultado);
    return resultado;
}

function kata18() {
    // implemente o código do kata 18 aqui
    let resultado = sampleArray[0];
    for (let i = 1; i < sampleArray.length; i++) {
        if (resultado < sampleArray[i]) {
            resultado = sampleArray[i]
        }
    }
    showResult(resultado);
    return resultado;
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
// function showBonus(){
// const bonusPai = document.getElementById('bonus');
// const bonusP = document.createElement('div');

// bonusP.style.background= 'gray';
// bonusP.style.height= 20+'px';
// bonusP.style.border = 1+'px solid black'
// bonusPai.appendChild(bonusP);
// }

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for (let i = 1; i <= 20; i++) {

        let bonusPai = document.getElementById('bonus');
        let bonusP = document.createElement('div');

        bonusP.style.background = 'gray';
        bonusP.style.width = 100 + 'px';
        bonusP.style.height = 20 + 'px';
        bonusP.style.border = 1 + 'px solid black';
        bonusPai.appendChild(bonusP);
    }
}
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    for (let i = 105; i <= 200; i += 5) {

        let bonusPai = document.getElementById('bonus');
        let bonusP = document.createElement('div');

        bonusP.style.background = 'gray';
        bonusP.style.width = i + 'px';
        bonusP.style.height = 20 + 'px';
        bonusP.style.border = 1 + 'px solid black';
        bonusPai.appendChild(bonusP);
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for (let i = 0; i < sampleArray.length; i++) {

        let bonusPai = document.getElementById('bonus');
        let bonusP = document.createElement('div');

        bonusP.style.background = 'gray';
        bonusP.style.width = sampleArray[i] + 'px';
        bonusP.style.height = 20 + 'px';
        bonusP.style.border = 1 + 'px solid black';
        bonusPai.appendChild(bonusP);
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        if (i % 2 === 0) {
            let bonusPai = document.getElementById('bonus');
            let bonusP = document.createElement('div');

            bonusP.style.background = 'gray';
            bonusP.style.width = sampleArray[i] + 'px';
            bonusP.style.height = 20 + 'px';
            bonusP.style.border = 1 + 'px solid black';
            bonusPai.appendChild(bonusP);
        } else {
            let bonusPai = document.getElementById('bonus');
            let bonusP = document.createElement('div');

            bonusP.style.background = 'red';
            bonusP.style.width = sampleArray[i] + 'px';
            bonusP.style.height = 20 + 'px';
            bonusP.style.border = 1 + 'px solid black';
            bonusPai.appendChild(bonusP);

        }
    }
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            let bonusPai = document.getElementById('bonus');
            let bonusP = document.createElement('div');

            bonusP.style.background = 'red';
            bonusP.style.width = sampleArray[i] + 'px';
            bonusP.style.height = 20 + 'px';
            bonusP.style.border = 1 + 'px solid black';
            bonusPai.appendChild(bonusP);
        }else{
            let bonusPai = document.getElementById('bonus');
            let bonusP = document.createElement('div');

            bonusP.style.background = 'gray';
            bonusP.style.width = sampleArray[i] + 'px';
            bonusP.style.height = 20 + 'px';
            bonusP.style.border = 1 + 'px solid black';
            bonusPai.appendChild(bonusP);
        }
    }
}
