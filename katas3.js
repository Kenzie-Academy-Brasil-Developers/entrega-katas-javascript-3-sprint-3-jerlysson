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
kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    let resultado = [];
    for (let i = 25; i >= 1; i--) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let resultado = [];
    for (let i = -1; i >= -25; i--) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    let resultado = [];
    for (let i = -25; i <= -1; i++) {
        resultado.push(i);
    }
    showResult(resultado);
    return resultado;
}
kata4()

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
kata5()

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
kata6()

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
kata7()

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
kata8() 

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
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    showResult(sampleArray);
    return sampleArray;
}
kata10()

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
kata11()

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
kata12()

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
kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let resultado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        resultado.push(sampleArray[i] * sampleArray[i])
    }
    showResult(resultado);
    return resultado;
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let resultado = 0;
    for (let i = 1; i <= 20; i++) {
        resultado = resultado + i;
    }
    showResult(resultado);
    return resultado;
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0;
    for (let i = 0; i <= sampleArray.length - 1; i++) {
        resultado = resultado + sampleArray[i];
    }
    showResult(resultado);
    return resultado;
}
kata16()

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
kata17()


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
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
// function showBonus(){
// const bonusDivai = document.getElementById('bonus');
// const bonusDiv = document.createElement('p');

// bonusDiv.style.background= 'gray';
// bonusDiv.style.height= 20+'px';
// bonusDiv.style.border = 1+'px solid black'
// bonusDivai.appendChild(bonusDiv);
// }

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for (let i = 1; i <= 20; i++) {

        let bonusDivai = document.getElementById('bonus');
        let bonusDiv = document.createElement('div');

        bonusDiv.style.background = 'gray';
        bonusDiv.style.width = 100 + 'px';
        bonusDiv.style.height = 20 + 'px';
        bonusDiv.style.border = 1 + 'px solid black';
        bonusDivai.appendChild(bonusDiv);
    }
}
kataBonus1()

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    for (let i = 105; i <= 200; i += 5) {

        let bonusDivai = document.getElementById('bonus');
        let bonusDiv = document.createElement('div');

        bonusDiv.style.background = 'gray';
        bonusDiv.style.width = i + 'px';
        bonusDiv.style.height = 20 + 'px';
        bonusDiv.style.border = 1 + 'px solid black';
        bonusDivai.appendChild(bonusDiv);
    }
}
kataBonus2()

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for (let i = 0; i < sampleArray.length; i++) {

        let bonusDivai = document.getElementById('bonus');
        let bonusDiv = document.createElement('div');

        bonusDiv.style.background = 'gray';
        bonusDiv.style.width = sampleArray[i] + 'px';
        bonusDiv.style.height = 20 + 'px';
        bonusDiv.style.border = 1 + 'px solid black';
        bonusDivai.appendChild(bonusDiv);
    }
}
kataBonus3()

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        if (i % 2 === 0) {
            let bonusDivai = document.getElementById('bonus');
            let bonusDiv = document.createElement('div');

            bonusDiv.style.background = 'gray';
            bonusDiv.style.width = sampleArray[i] + 'px';
            bonusDiv.style.height = 20 + 'px';
            bonusDiv.style.border = 1 + 'px solid black';
            bonusDivai.appendChild(bonusDiv);
        } else {
            let bonusDivai = document.getElementById('bonus');
            let bonusDiv = document.createElement('div');

            bonusDiv.style.background = 'red';
            bonusDiv.style.width = sampleArray[i] + 'px';
            bonusDiv.style.height = 20 + 'px';
            bonusDiv.style.border = 1 + 'px solid black';
            bonusDivai.appendChild(bonusDiv);

        }
    }
}
kataBonus4()

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            let bonusDivai = document.getElementById('bonus');
            let bonusDiv = document.createElement('div');

            bonusDiv.style.background = 'red';
            bonusDiv.style.width = sampleArray[i] + 'px';
            bonusDiv.style.height = 20 + 'px';
            bonusDiv.style.border = 1 + 'px solid black';
            bonusDivai.appendChild(bonusDiv);
        }else{
            let bonusDivai = document.getElementById('bonus');
            let bonusDiv = document.createElement('div');

            bonusDiv.style.background = 'gray';
            bonusDiv.style.width = sampleArray[i] + 'px';
            bonusDiv.style.height = 20 + 'px';
            bonusDiv.style.border = 1 + 'px solid black';
            bonusDivai.appendChild(bonusDiv);
        }
    }
}
kataBonus5()
