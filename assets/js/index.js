function calcularImc() {
  const alturaInput = document.querySelector(".alturaInput");
  let alturaValue = document.querySelector("#alturaValue");
  const pesoInput = document.querySelector(".pesoInput");
  let pesoValue = document.querySelector("#pesoValue");
  let inputTermometro = document.querySelector(".termometro");

  alturaInput.addEventListener("input", (e) => {
    return (alturaValue.innerHTML = Number(e.target.value / 100).toFixed(2));
  });

  pesoInput.addEventListener("input", (e) => {
    return (pesoValue.innerHTML = Number(e.target.value));
  });

  const form = document.querySelector(".form");
  let results = document.querySelector(".results");

  let p = document.createElement('p')

  //  results.appendChild(Termometro);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  //  console.log("submit");
  //  console.log(typeof pesoValue.innerText, typeof alturaValue.innerText);
    

    const imc =
      Number(pesoValue.innerText / (alturaValue.innerText * alturaValue.innerText));

    const imcResults = (imc) => {
      if (!imc) {
        return "valor invalido";
      } else if (imc < 18.5) {
        return `seu imc é ${imc.toFixed(2)} o seu peso está abaixo do normal`;
      } else if (imc >= 18.5 && imc < 24.9) {
        return `seu imc é ${imc.toFixed(2)} o seu está peso normal`;
      } else if (imc >= 24.9 && imc < 30) {
        return `seu imc é ${imc.toFixed(2)} e vôce está com sobrepeso`;
      } else if (imc > 30) {
        return `seu imc é ${imc.toFixed(2)} e você está obeso`;
      }
    };
    inputTermometro.value = Math.round(imc);
    p.innerHTML = imcResults(imc)

    results.classList.remove('hidden')
    inputTermometro.classList.remove('hidden')

    try {
    results = results.appendChild(p);
    } catch { console.log('algo errado não está certo')}

    inputTermometro.addEventListener('input', e => inputTermometro.value = Math.round(imc))
  });

  form.addEventListener('reset', e => {
    results.classList.add('hidden')
    inputTermometro.classList .add('hidden')
    alturaValue.innerHTML = 0
    pesoValue.innerHTML = 0
  })
}

calcularImc();
