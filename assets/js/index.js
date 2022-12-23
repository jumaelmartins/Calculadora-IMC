

function calcularImc () {

    const form = document.querySelector('.form')
    const results = document.querySelector('.results')

    form.addEventListener ('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        const altura = parseFloat(form.querySelector('.altura').value);
        const peso = parseFloat(form.querySelector('.peso').value);
        
        console.log(typeof(peso), typeof(altura))

        const imc = peso / (altura * altura);  
        
        const imcResults = (imc) => {

            if (!imc) {
                return 'valor invalido'
            } else if (imc <18.5) {
                return `seu imc é ${imc.toFixed(2)} peso abaixo do normal`
            } else if ( imc >= 18.5 && imc <24.9) {
                return `seu imc é ${imc.toFixed(2)} peso normal`
            } else if ( imc >= 24.9 && imc <30) {
                return `seu imc é ${imc.toFixed(2)} está com sobrepeso`
            } else if ( imc >30) {
                return `seu imc é ${imc.toFixed(2)} está obeso`
            }
        }

        results.innerHTML = (`<p>${imcResults(imc)}</p>`)
    })
};

calcularImc();