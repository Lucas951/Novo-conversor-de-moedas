const botaoConvert = document.querySelector('button')
const seletorDeMoeda = document.querySelector('#selectt2')
const seletorDeMoeda2 = document.querySelector('.selectt')


function converter(){
    const inputValue = document.querySelector('.entrada-do-dado').value
    const moedaASerConvertida = document.querySelector('.moeda-a-ser-convertida')
    const moedaConvertida = document.querySelector('.moeda-convertida')
    
console.log(seletorDeMoeda.value)

    const dolarToday = 5.67
    const euroToday = 6.21
    const libraToday = 7.37
    const bitcoinToday = 86598
    const realToday = 1


    if(seletorDeMoeda2.value == "real"){
        moedaASerConvertida.innerHTML = new Intl.NumberFormat('pt-BR', {style: "currency" , currency: 'BRL'}).format(inputValue)
    }

    if(seletorDeMoeda2.value == 'dolar'){
        moedaASerConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(inputValue)
    }
    if(seletorDeMoeda2.value == 'euro'){
        moedaASerConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style:'currency', currency: 'EUR'}).format(inputValue)
    }
    if(seletorDeMoeda2.value == 'libra'){
        moedaASerConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(inputValue)
    }
    if(seletorDeMoeda2.value == 'bitcoin'){
        moedaASerConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format(inputValue)
    }


// convertendo de Dolar para qualquer outra moeda

   if(seletorDeMoeda2.value == 'dolar' && seletorDeMoeda.value == 'euro'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency :'EUR'}).format(inputValue * dolarToday / euroToday)
   }
   if(seletorDeMoeda2.value == 'dolar' && seletorDeMoeda.value == 'real'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format((inputValue * dolarToday) * realToday)
   }
   if(seletorDeMoeda2.value == 'dolar' && seletorDeMoeda.value == 'dolar'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputValue * realToday)
   }
   if(seletorDeMoeda2.value == 'dolar' && seletorDeMoeda.value == 'libra'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style:'currency', currency: 'GBP'}).format(inputValue* 0.77) // 0.77 corresponde 1 dolar = 0.77 libra
   }
   if(seletorDeMoeda2.value == 'dolar' && seletorDeMoeda.value == 'bitcoin'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format(inputValue / bitcoinToday)
   }

// Convertendo de Real para qualquer outra moeda
   if(seletorDeMoeda2.value == 'real' && seletorDeMoeda.value == 'dolar'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:"currency", currency: 'USD'}).format(inputValue/dolarToday)
   }
   if(seletorDeMoeda2.value == 'real' && seletorDeMoeda.value == 'real'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(inputValue)
   }
   if(seletorDeMoeda2.value == 'real' && seletorDeMoeda.value == 'euro'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style: "currency", currency: 'EUR'}).format(inputValue / euroToday)
   }
   if(seletorDeMoeda2.value == 'real' && seletorDeMoeda.value == 'libra'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style:'currency', currency: 'GBP'}).format(inputValue / libraToday)
   }
   if(seletorDeMoeda2.value == 'real' && seletorDeMoeda.value == 'bitcoin'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format(inputValue / bitcoinToday)
   }

// Convertendo de Euro para outras moedas
    if(seletorDeMoeda2.value == 'euro' && seletorDeMoeda.value == 'dolar'){
    let cambioEuroDolar = euroToday / dolarToday
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:"currency", currency: 'USD'}).format(inputValue * cambioEuroDolar)
   }
   if(seletorDeMoeda2.value == 'euro' && seletorDeMoeda.value == 'real'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(inputValue * euroToday)
   }
   if(seletorDeMoeda2.value == 'euro' && seletorDeMoeda.value == 'euro'){
    moedaConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style: "currency", currency: 'EUR'}).format(inputValue)
   }
   if(seletorDeMoeda2.value == 'euro' && seletorDeMoeda.value == 'libra'){
    let cambioEuroLibra = euroToday / libraToday
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style:'currency', currency: 'GBP'}).format(inputValue * cambioEuroLibra)
   }
   if(seletorDeMoeda2.value == 'euro' && seletorDeMoeda.value == 'bitcoin'){
    let cambioEuroDolar = euroToday / dolarToday
    moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format((inputValue * cambioEuroDolar) / bitcoinToday)
   }

// Convertendo de Libra para outras moedas

    if(seletorDeMoeda2.value == 'libra' && seletorDeMoeda.value == 'real'){
        moedaConvertida.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputValue * libraToday)
    }
    if(seletorDeMoeda2.value == 'libra' && seletorDeMoeda.value == 'dolar'){
        let cambioLibraDolar = libraToday / dolarToday
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:"currency", currency: 'USD'}).format( inputValue * cambioLibraDolar)
    }
    if(seletorDeMoeda2.value == 'libra' && seletorDeMoeda.value == 'euro'){
        let cambioLibraEuro = libraToday / euroToday
        moedaConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputValue * cambioLibraEuro)
    }
    if(seletorDeMoeda2.value == 'libra' && seletorDeMoeda.value == 'libra'){
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style:'currency', currency: 'GBP'}).format(inputValue)
    }
    if(seletorDeMoeda2.value == 'libra' && seletorDeMoeda.value == 'bitcoin'){
        let cambioLibraDolar = libraToday / dolarToday
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format((inputValue * cambioLibraDolar) / bitcoinToday)
    }

//Convertendo de Bitcoin para outras moedas

    if(seletorDeMoeda2.value == 'bitcoin' && seletorDeMoeda.value == 'real'){
        moedaConvertida.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((inputValue * bitcoinToday) * dolarToday)
    }
    if(seletorDeMoeda2.value == 'bitcoin' && seletorDeMoeda.value == 'dolar'){
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:"currency", currency: 'USD'}).format(inputValue * bitcoinToday)
    }
    if(seletorDeMoeda2.value == 'bitcoin' && seletorDeMoeda.value == 'euro'){
        let valoremdolar = inputValue * bitcoinToday
        moedaConvertida.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(valoremdolar * (euroToday / dolarToday))
    }
    if(seletorDeMoeda2.value == 'bitcoin' && seletorDeMoeda.value =='libra'){
        let valoremdolar = inputValue * bitcoinToday
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {style:"currency", currency: 'GBP'}).format(valoremdolar * (libraToday / dolarToday))
    }
    if(seletorDeMoeda2.value == 'bitcoin' && seletorDeMoeda.value == 'bitcoin'){
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-US', {style:'currency', currency:'BTC', minimumFractionDigits: 8, maximumFractionDigits:8}).format(inputValue)
    }


}

function trocarMoeda(){
console.log('trocou de moeda')

    const nomeMoeda = document.getElementById('nomeMoeda')
    const bandeiras = document.getElementById('bandeiras')
    const nomeMoeda2 = document.getElementById('nomeMoeda2')
    const bandeiras2 = document.getElementById('bandeiras2')


        if(seletorDeMoeda.value == 'dolar'){
        nomeMoeda.innerHTML = 'Dólar'
        bandeiras.src = './assets/eua.png'
        }

        if(seletorDeMoeda.value == 'euro'){
            nomeMoeda.innerHTML = 'Euro'
            bandeiras.src = './assets/euro.png'
        }

        if(seletorDeMoeda.value == 'libra'){
            nomeMoeda.innerHTML = 'Libra'
            bandeiras.src = './assets/libra.png'
        }

        if(seletorDeMoeda.value == 'bitcoin'){
            nomeMoeda.innerHTML = 'Bitcoin'
            bandeiras.src = './assets/bitcoin.png'
        }

        if(seletorDeMoeda.value == 'real'){
            nomeMoeda.innerHTML = 'Real'
            bandeiras.src = './assets/brasil 2.png'
        }


    if(seletorDeMoeda2.value == 'real'){
        nomeMoeda2.innerHTML = 'Real'
        bandeiras2.src = './assets/brasil 2.png'
    }
    if(seletorDeMoeda2.value == 'dolar'){
        nomeMoeda2.innerHTML = 'Dólar'
        bandeiras2.src = './assets/eua.png'
    }
    if(seletorDeMoeda2.value == 'euro'){
        nomeMoeda2.innerHTML = 'Euro'
        bandeiras2.src = './assets/euro.png'
    }
    if(seletorDeMoeda2.value == 'libra'){
        nomeMoeda2.innerHTML = 'Libra'
        bandeiras2.src = './assets/libra.png'
    }
    if(seletorDeMoeda2.value == 'bitcoin'){
        nomeMoeda2.innerHTML = 'Bitcoin'
        bandeiras2.src = './assets/bitcoin.png'
    }

       converter()
}

seletorDeMoeda.addEventListener('change', trocarMoeda)
seletorDeMoeda2.addEventListener('change', trocarMoeda)
botaoConvert.addEventListener('click', converter)