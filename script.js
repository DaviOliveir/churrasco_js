function confir(){
    let bebe = window.document.getElementById('bebe')
    let naoBebe = window.document.getElementById('nbebe')
    let crianca = window.document.getElementById('crianca')
    let res = window.document.getElementById('res')

    if(Number(bebe.value) == 0|| Number(naoBebe.value) == 0 || Number(crianca.value) == 0){

        alert('Por favor digite um valor valido')
    }else{

        res.innerHTML = ''
    let carnecri = 0.2
    let carnA = 0.4
    let acom = 0.2
    let cerveja = 2 
    let refrigerante = 0.5
    let agua = 0.5

    let calcCri
    let calcnbebe 
    let calcBebe
    

    calcCri = Number(crianca.value) * carnecri
    calcnbebe = Number(naoBebe.value) * carnA
    calcBebe = Number(bebe.value) * carnA 
    let calcCar = calcnbebe + calcBebe +calcCri
    res.innerHTML += ` <p>Total de Carne: ${calcCar}kg</p>`

    
    calcCri = Number(crianca.value) * acom
    calcnbebe = Number(naoBebe.value) * acom
    calcBebe = Number(bebe.value) * acom 
    let acompa = calcnbebe + calcBebe + calcCri
    res.innerHTML += ` <p>Total de acompanhamento : ${acompa}kg</p>` 

    calcBebe = Number(naoBebe.value) * cerveja
    res.innerHTML += ` <p>Total de cerveja : ${calcBebe.toFixed(2)}kg</p>` 

    

    calcnbebe = Number(naoBebe.value) * refrigerante
    calcCri = Number(crianca.value) * refrigerante
    let total = calcCri + calcnbebe
    res.innerHTML += ` <p>Totoal de refrigerante : ${total.toFixed(2)}kg</p>`

    calcCri = Number(crianca.value) * agua
    calcnbebe = Number(naoBebe.value) * agua
    calcBebe = Number(bebe.value) * agua
    let soma = calcBebe + calcnbebe + calcCri

    res.innerHTML += ` <p>Total de água : ${soma.toFixed(2)}L</p>`

    }
}